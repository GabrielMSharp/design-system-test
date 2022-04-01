'use strict';

module.exports = function(grunt) {

    const svgoBrandDirectories = {
      'bloomandwild': './projects/oasys-lib/svgo/bloomandwild/min',
      'bloomon': './projects/oasys-lib/svgo/bloomon/min',
    }
    
    const outputBrandDirectories = {
      'bloomandwild': './projects/oasys-lib/src/assets/bloomandwild/',
      'bloomon': './projects/oasys-lib/src/assets/bloomon/',
    }
    
    const brand = grunt.option('brand') || 'bloomandwild';
    
    console.log('Generating SVG sprite for brand: ', brand)

    const baseDir  = svgoBrandDirectories[brand];
    const svgGlob      = '**/*.svg';
    const outDir       = outputBrandDirectories[brand]
    const config       = {
        "dest": outDir,
        "transform": [],
        "shape": {
          id: {
              "generator": "icon-%s"
          }
        },
        "svg": {
            "namespaceIDs": false
        },
        "mode": {
            "symbol": {
                "dest": "icons",
                "sprite": "icons.svg",
                "inline": false
            }
        }
    };

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