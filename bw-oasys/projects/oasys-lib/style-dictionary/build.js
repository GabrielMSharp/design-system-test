console.log("Running Bloom & Wild token building");

// const { transform } = require('@divriots/style-dictionary-to-figma');
// import { transform } from '@divriots/style-dictionary-to-figma';
const { trimValue,  trimName,  useRefValue,  markTokenset } = require('@divriots/style-dictionary-to-figma');
const StyleDictionaryPackage = require("style-dictionary");

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
  name: 'figmaTokensPlugin',
  formatter: ({ dictionary, platform, options }) => {
    console.log(platform);
    const brandedTokens = {}

    brandedTokens[options.brand] = dictionary.tokens

    // const transformedTokens = transform(brandedTokens);
    const transformedTokens = markTokenset(trimName(trimValue(brandedTokens)));
    return JSON.stringify(transformedTokens, null, 2);
  },
});

function getStyleDictionaryConfig(brand) {
  return {
    source: [
        `tokens/global/**/*.json`,
        `tokens/${brand}/**/**/*.json`
    ],
    platforms: {
      css: {
        transformGroup: "css",
        files: [
          {
            destination: `./../src/assets/${brand}/variables.css`,
            format: "css/variables",
            options: {
              showFileHeader: true,
              outputReferences: false
            },
            filter: (token) => {
              return token.name.indexOf('global') === -1;
            }
          },
        ],
      },
      figmaJsonGlobal: {
        transforms: ["attribute/cti", "name/cti/kebab", "color/hex", "size/remToPx"],
        buildPath: 'figma-tokens/',
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
        buildPath: 'figma-tokens/',
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
              // BRAND SEMANTIC AND COMPONENT TOKENS ONLY
              // BRAND SEMANTIC AND COMPONENT TOKENS ONLY
              return token.name.indexOf('global') === -1;
            }
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
