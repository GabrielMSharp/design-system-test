console.log("Running Bloom & Wild token building");

const StyleDictionaryPackage = require("style-dictionary");

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

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
              outputReferences: false,
            },
            filter: (token) => {
              console.log(token);
              // return true;
              return token.name.indexOf('brand') === -1;
            }
          },
        ],
      }
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
