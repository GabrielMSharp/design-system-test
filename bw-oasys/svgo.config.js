// svgo.config.js
module.exports = {
  plugins: [
    // set of built-in plugins enabled by default
    'preset-default',
    {
      name: "removeAttrs",
        params: {
          attrs: "(fill|stroke)"
        } 
    }
  ],
};