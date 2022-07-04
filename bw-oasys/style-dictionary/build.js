console.log("Running Bloom & Wild token building");

// const { transform } = require('@divriots/style-dictionary-to-figma');
// import { transform } from '@divriots/style-dictionary-to-figma';
const { trimValue,  trimName,  useRefValue,  markTokenset } = require('@divriots/style-dictionary-to-figma');
const StyleDictionaryPackage = require("style-dictionary");
const { fileHeader, formattedVariables } = StyleDictionaryPackage.formatHelpers;

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

StyleDictionaryPackage.registerFormat({
  name: 'figmaTokensPluginGlobal',
  formatter: ({ dictionary }) => {

    const globalTokens = {}
    globalTokens['global'] = dictionary.tokens

    const transformedTokens = markTokenset(trimName(trimValue(dictionary.tokens)));
    return JSON.stringify(transformedTokens, null, 2);
  },
});


StyleDictionaryPackage.registerFormat({
  name: 'css/variables-themed',
  formatter: function({dictionary, file, options}) {
    const { outputReferences, brand } = options;
    return fileHeader({file}) +
      `:root .${brand} {\n` +
      formattedVariables({format: 'css', dictionary, outputReferences}) +
      '\n}\n';
  }
});

StyleDictionaryPackage.registerFormat({
  name: 'figmaTokensPlugin',
  formatter: ({ dictionary, platform, options }) => {
    // console.log(platform);
    const brandedTokens = {}

    brandedTokens[options.brand] = dictionary.tokens

    const transformedTokens = markTokenset(trimName(trimValue(brandedTokens)));
    return JSON.stringify(transformedTokens, null, 2);
  },
});

StyleDictionaryPackage.registerFormat({
  name: 'json/storybook',
  formatter: ({ dictionary, platform, options }) => {
    return '{\n' + dictionary.allTokens.map(function(token) {
      return `  "${token.name}": {
        "value": ${JSON.stringify(token.value)}
      }`;
    }).join(',\n') + '\n}';
  },
});

function getStyleDictionaryConfig(brand) {
  return {
    source: [
        `./style-dictionary/tokens/global/**/*.json`,
        `./style-dictionary/tokens/${brand}/**/**/*.json`
    ],
    platforms: {
      brandTokensCss: {
        transformGroup: "css",
        files: [
          {
            destination: `./projects/oasys-lib/src/assets/${brand}/variables.css`,
            format: "css/variables-themed",
            options: {
              brand,
              showFileHeader: true,
              outputReferences: false
            },
            filter: (token) => {
              return token.name.indexOf('global') === -1;
            }
          },
        ],
      },
      globalTokensCss: {
        transformGroup: "css",
        files: [
          {
            destination: `./projects/oasys-lib/src/assets/global/variables.css`,
            format: "css/variables",
            options: {
              showFileHeader: true,
              outputReferences: false
            },
            filter: (token) => {
              return token.name.indexOf('global') !== -1;
            }
          },
        ],
      },
      figmaJsonGlobal: {
        transforms: ["attribute/cti", "name/cti/kebab", "color/hex", "size/remToPx"],
        buildPath: './style-dictionary/figma-tokens/',
        basePxFontSize: '10',
        files: [
          {
            destination: `tokens.json`,
            format: 'figmaTokensPluginGlobal',
            options: {
              outputReferences: false,
              brand: brand
            },
            filter: (token) => {
              // Only output global tokens here
              return token.name.indexOf('global') !== -1;
            }
          },
        ],
      },
      figmaJsonBranded: {
        transforms: ["attribute/cti", "name/cti/kebab", "color/hex", "size/remToPx"],
        buildPath: './style-dictionary/figma-tokens/',
        basePxFontSize: '10',
        files: [
          {
            destination: `tokens-${brand}.json`,
            format: 'figmaTokensPlugin',
            options: {
              outputReferences: false,
              brand: brand
            },
            filter: (token) => {
              // BRAND SEMANTIC AND COMPONENT TOKENS ONLY
              return token.name.indexOf('global') === -1;
            }
          },
        ],
      },
      storybookOutput: {
        transformGroup: "css",
        files: [
          {
            destination: `./stories/assets/tokens/tokens.json`,
            format: "json/storybook",
            options: {
              showFileHeader: true,
              outputReferences: false
            },
          },
        ],
      },
    },
  };
}

console.log("Build started...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS


["bloomandwild", "bloomon"].map(function (brand) {
    console.log("\n==============================================");
    console.log(`\nProcessing: [${brand}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(brand));

    StyleDictionary.buildAllPlatforms();

    console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");
