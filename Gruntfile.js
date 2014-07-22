module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			foo: {
				src: [
					"src/js/*.js",
					"src/js/controllers/*.js",
					],
				},
			},
			concat: {
				options: {
					separator: ';',
				},
				dist: {
					src: ['src/js/app.js', 'src/js/controllers/about.js'],
					dest: 'build/systur.js',
				},
			},
			// From https://github.com/gruntjs/grunt-contrib-uglify
			uglify: {
				my_target: {
					files: {
						'build/systur.min.js': ['build/systur.js']
					}
				}
			},
			// From https://github.com/gruntjs/grunt-contrib-connect
			connect: {
				server: {
					options: {
						port: 8081,
						keepalive: true,
						livereload: false,
						open:true,
					}
				}
			}
	});

	// Loads the tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// Default task(s).
	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'connect']);
};