console.log("Running Bloom & Wild token building");

// const { transform } = require('@divriots/style-dictionary-to-figma');
// import { transform } from '@divriots/style-dictionary-to-figma';
const { trimValue,  trimName,  useRefValue,  markTokenset } = require('@divriots/style-dictionary-to-figma');
const StyleDictionaryPackage = require("style-dictionary");

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

StyleDictionaryPackage.registerFormat({
  name: 'figmaTokensPlugin',
  formatter: ({ dictionary, platform, options, file }) => {
    console.log(platform);
    const brandedTokens = {}

    brandedTokens[options.brand] = dictionary.tokens

    // const transformedTokens = transform(brandedTokens);
    const transformedTokens = markTokenset(trimName(trimValue(dictionary.tokens)));
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
              // console.log(token);
              // return true;
              return token.name.indexOf('global') === -1;
            }
          },
        ],
      },
      json: {
        transforms: ["attribute/cti", "name/cti/kebab", "color/hex", "size/remToPx"],
        buildPath: 'figma-tokens/',
        files: [
          {
            destination: `tokens.json`,
            format: 'figmaTokensPlugin',
            options: {
              outputReferences: true,
              basePxFontSize: '16',
              brand: brand
            }
          },
        ],
      },
    },
  };
}

console.log("Build started...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS


["global", "bloomandwild", "bloomon"].map(function (brand) {
    console.log("\n==============================================");
    console.log(`\nProcessing: [${brand}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(brand));

    StyleDictionary.buildAllPlatforms();

    console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");
