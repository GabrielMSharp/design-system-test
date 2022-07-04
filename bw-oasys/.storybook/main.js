module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../projects/oasys-lib/src/lib/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-addon-themes',
    '@ljcl/storybook-addon-cssprops'
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "staticDirs": [
    { from: '../projects/oasys-lib/src/assets/bloomon/icons', to: '/bloomon/assets/icons/' },
    { from: '../projects/oasys-lib/src/assets/bloomandwild/icons', to: '/bloomandwild/assets/icons/' }
  ],
}