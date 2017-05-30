module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: ['src/*.js','src/*/*.js'],
                dest: 'build/js/<%= pkg.name %>-<%= pkg.version %>.min.js'
            }
        },
        cssmin: {
            build: {
                files: {
                    'build/css/<%= pkg.name %>-<%= pkg.version %>.min.css': ['src/css/*.css']
                }
            }
        },
        clean: ['build/css','build/js'],
		concat: {
			options: {
			   separator: ';',
			},
			dist: {
			 src: ['bower_components/jquery/dist/*.min.js','bower_components/angular/*.min.js','bower_components/bootstrap/dist/js/*.min.js','bower_components/angular-route/*.min.js','bower_components/angular-bootstrap/*.min.js', 'build/js/<%= pkg.name %>-<%= pkg.version %>.min.js'],
			 dest: 'build/js/<%= pkg.name %>-<%= pkg.version %>.min.js',
			},
		},
		link_html: {
			your_target: {
			// Target-specific file lists and/or options go here.
			jsFiles: ['build/js/<%= pkg.name %>-<%= pkg.version %>.min.js'],
			cssFiles: ['build/css/<%= pkg.name %>-<%= pkg.version %>.min.css'],
			targetHtml: ['index.html'],
			
    }
  }
    });
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-link-html');
    grunt.registerTask('default', ['clean', 'cssmin', 'uglify','concat', 'link_html']);
};
