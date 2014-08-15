module.exports = function (grunt) {
	'use strict';

	var metaFiles = ['bower.json', 'package.json'];
	grunt.config.init({
		bump: {
			options: {
				files: metaFiles,
				updateConfigs: [],
				commit: true,
				commitMessage: 'Release v%VERSION%',
				commitFiles: metaFiles,
				createTag: true,
				push: true,
				pushTo: 'origin',
				tagName: 'v%VERSION%',
				tagMessage: 'Version %VERSION%'
			}
		},
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'assets/images/',
                        src: '**/*',
                        dest: 'images/'
                    }
                ]
            }
        },
		sass: {
			distribution: {
				files: {
					'core.css': 'assets/styles/core.scss'
				}
			}
		},
		watch: {
			styles: {
				files: 'assets/styles/**/*',
				tasks: ['sass:distribution']
			}
		}
	});

	// Load all npm installed grunt tasks.
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);



	grunt.registerTask('default', ['copy', 'sass', 'watch']);
};
