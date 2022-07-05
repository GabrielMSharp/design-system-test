console.log("Running Bloom & Wild token building");

const { trimValue,  trimName,  useRefValue,  markTokenset } = require('@divriots/style-dictionary-to-figma');
const StyleDictionaryPackage = require("style-dictionary");
const { fileHeader, formattedVariables } = StyleDictionaryPackage.formatHelpers;
const chroma = require('chroma-js');

const colorTransform = (token) => {
  const { value, modify = [] } = token;
  let color = chroma(value);

  // iterate over the modify array (see tokens/color.json)
  // and apply each modification in order
  modify.forEach(({ type, amount }) => {
    // modifier type must match a method name in chromajs
    // https://gka.github.io/chroma.js/
    // chroma methods can be chained, so each time we override the color variable
    // we can still call other chroma methods, similar to
    // chroma(value).brighten(1).darken(1).hex();
    console.log("Hi", color);
    console.log("HELLO", type, " ", amount);
    color = color[type](amount);
  });


  return color.hex();
}

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
    transform: {
      colorTransform: {
        type: `value`,
        // only transforms that have transitive: true will be applied to tokens
        // that alias/reference other tokens
        transitive: true,
        matcher: (token) => token.modify,
        transformer: colorTransform
      },

      // For backwards compatibility, all built-in transforms are not transitive
      // by default. This will make the 'color/css' transform transitive
      'color/css': Object.assign({}, StyleDictionaryPackage.transform[`color/css`], {
        transitive: true
      }),
    },
    platforms: {
      brandTokensCss: {
        transforms: [`attribute/cti`, `name/cti/kebab`, `colorTransform`, `color/css`],
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
        transforms: [`attribute/cti`, `name/cti/kebab`, `colorTransform`, `color/css`],
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
        transforms: ["attribute/cti", "name/cti/kebab", "color/hex", "size/remToPx", 'colorTransform'],
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
