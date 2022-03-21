console.log("RUNNING THINGS THING GNG GGG&**£&@&G£G@&£&@£&");

const StyleDictionaryPackage = require("style-dictionary");

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

function getStyleDictionaryConfig(brand) {
  return {
    source: [
        "tokens/global/**/*.json",
        `tokens/brands/${brand}/*.json`
    ],
    platforms: {
      web: {
        transformGroup: "css",
        buildPath: "build/css/",

        files: [
          {
            destination: `../../../src/assets/${brand}/variables.css`,
            format: "css/variables",
            options: {
              showFileHeader: true,
              outputReferences: true,
            },
          },
        ],
      },
    },
  };
}

console.log("Build started...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS

// const StyleDictionary = require('style-dictionary').extend('config.json');
// StyleDictionary.buildAllPlatforms();

["bloomandwild", "bloomon"].map(function (brand) {
    console.log("\n==============================================");
    console.log(`\nProcessing: [${brand}]`);

    const StyleDictionary = StyleDictionaryPackage.extend('./style-dictionary/config.json')
    // .extend(
    //     getStyleDictionaryConfig(brand)
    // );

    StyleDictionary.buildAllPlatforms();

    console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");
