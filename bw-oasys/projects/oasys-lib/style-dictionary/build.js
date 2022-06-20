console.log("Running Bloom & Wild token building");

const { transform } = require('@divriots/style-dictionary-to-figma');
const StyleDictionaryPackage = require("style-dictionary");

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

function getStyleDictionaryConfig(brand) {
  return {
    source: [
        `tokens/global/**/*.json`,
        `tokens/${brand}/**/**/*.json`
    ],
    format: {
      figmaTokensPlugin: ({ dictionary }) => {
        const transformedTokens = transform(dictionary.tokens);
        return JSON.stringify(transformedTokens, null, 2);
      },
    },
    platforms: {
      css: {
        transformGroup: "css",
        files: [
          {
            destination: `./../src/assets/${brand}/variables.css`,
            format: "css/variables",
            options: {
              showFileHeader: true,
              outputReferences: false,
            },
            filter: (token) => {
              console.log(token);
              return token.name.indexOf('global') === -1;
            }
          },
        ],
      },
      json: {
        transformGroup: 'js',
        buildPath: 'figma-tokens/',
        files: [
          {
            destination: 'tokens.json',
            format: 'figmaTokensPlugin',
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
