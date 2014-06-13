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
		sass: {
			distribution: {
				files: {
					'core.css': 'core.scss'
				}
			}
		},
		watch: {
			styles: {
				files: 'core.scss',
				tasks: ['sass:distribution']
			}
		}
	});

	// Load all npm installed grunt tasks.
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);



	grunt.registerTask('default', ['sass', 'watch']);
};
