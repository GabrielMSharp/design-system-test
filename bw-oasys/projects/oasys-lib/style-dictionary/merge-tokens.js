const fs = require('fs');
const path = require('path');
const glob = require('path');

console.log("Merge token files for Figma...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS


// ["bloomandwild", "bloomon"].map(function (brand) {
    console.log("\n==============================================");

    const globalTokens = JSON.parse(fs.readFileSync("figma-tokens/tokens.json"))['global'];
    const bloomonTokens = JSON.parse(fs.readFileSync("figma-tokens/tokens-bloomon.json"))['bloomon'];
    const bloomandwildTokens = JSON.parse(fs.readFileSync("figma-tokens/tokens-bloomandwild.json"))['bloomandwild'];

    const mergedTokens = {
      'global': globalTokens,
      'bloomon': bloomonTokens,
      'bloomandwild': bloomandwildTokens
    }
    fs.writeFileSync('figma-tokens/tokens.json', JSON.stringify(mergedTokens, null, 2), 'utf8');
    // , function(err, file) {
      // console.log(tokens.toString());
    // });

    // let pugFiles = glob.sync(`${base}src/**/*.pug`);

    // let contents = fs.readFileSync(filePath, 'utf8');
    // contents = contents.replace(` ${item}`, ` !{t('${key}')}`);
    // fs.writeFileSync('./new_translations.json', JSON.stringify(translationKeys, null, 2));



// });