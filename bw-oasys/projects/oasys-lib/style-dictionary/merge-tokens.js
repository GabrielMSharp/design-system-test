const fs = require('fs');

console.log("Merge token files for Figma...");

console.log("\n==============================================");

// Get global, bloomon and bloomandwild tokens
const globalTokens = JSON.parse(fs.readFileSync("figma-tokens/tokens.json"))['global'];
const bloomonTokens = JSON.parse(fs.readFileSync("figma-tokens/tokens-bloomon.json"))['bloomon'];
const bloomandwildTokens = JSON.parse(fs.readFileSync("figma-tokens/tokens-bloomandwild.json"))['bloomandwild'];

// Merge tokens into one object
const mergedTokens = {
  'global': globalTokens,
  'bloomon': bloomonTokens,
  'bloomandwild': bloomandwildTokens
}

// Write back to the main json that Figma is connected to via Figma Tokens plugin
fs.writeFileSync('figma-tokens/tokens.json', JSON.stringify(mergedTokens, null, 2), 'utf8');
