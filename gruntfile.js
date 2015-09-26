module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/**\n * @link www.couchfriends.com\n * @license MIT\n */\n'
            },
            build: {
                src: [
                    'src/utils/howler.js', // Load howler before Pixi for loading audio files
                    'src/utils/pixi.js',
                    'src/utils/randomcolor.js',
                    'src/SG/SG.js',
                    'src/SG/SG.Element.js',
                    'src/SG/SG.Background.js',
                    'src/SG/menu/SG.Menu.js',
                    'src/SG/menu/SG.Menu.Element.js',
                    'src/SG/menu/SG.Menu.Button.js',
                    'src/SG/menu/SG.Menu.ButtonMenu.js',
                    'src/SG/menu/SG.Menu.ButtonPlay.js',
                    'src/SG/menu/SG.Menu.ButtonSettings.js',
                    'src/SG/menu/SG.Menu.ButtonCredits.js',
                    'src/SG/menu/SG.Menu.Level.js',
                    'src/SG/menu/SG.Menu.Level001.js',
                    'src/SG/menu/SG.Menu.Level002.js',
                    'src/SG/menu/SG.Menu.Level005.js',
                    'src/SG/levels/SG.Level.js',
                    'src/SG/ships/SG.Ship.js',
                    'src/SG/ships/SG.ShipPlayer.js',
                    'src/game.js'
                ],
                dest: 'build/game.js'
            }
        },
        less: {
            production: {
                options: {
                    compress: true,
                    plugins: [
                        new (require('less-plugin-clean-css'))({})
                    ]
                },
                files: {
                    "build/assets/game.css": [
                        'src/assets/game.less'
                    ]
                }
            }
        },
        copy: {
            main: {
                src: ['**', '!*.less', '!*.css'],
                dest: 'build/assets/',
                cwd: 'src/assets/',
                expand: true
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'less', 'copy']);

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-contrib-copy');

};