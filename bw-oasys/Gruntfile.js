'use strict';

var baseDir  = 'svg/base/dir',   // <-- Set to your SVG base directory
svgGlob      = '**/*.svg',       // <-- Glob to match your SVG files
outDir       = 'output/dir',     // <-- Main output directory
config       = {
    "dest": "./projects/oasys-lib/src/assets/bloomandwild/svgspritetest",
    "transform": [],
    // "shape": {
    //     "id": {
    //         // "generator": function(name) {     return path.basename(name.split(path.sep).join(this.separator), '.svg'); }
    //     }
    // },
    "svg": {
        "namespaceIDs": false
    },
    "mode": {
        "symbol": {
            "sprite": "icons.svg",
            "inline": true
        }
    }
};

module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({

        // svg-sprite configuration
        svg_sprite        : {
            dist          : {
                expand    : true,
                cwd       : baseDir,
                src       : [svgGlob],
                dest      : outDir,
                options   : config
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-svg-sprite');

    // By default, compile the sprite(s)
    grunt.registerTask('default', ['svg_sprite']);
};