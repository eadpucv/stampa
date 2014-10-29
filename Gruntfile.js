module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	    webfont: {
		  icons: {
		    src: 'icons-light/*.svg',
        dest: 'fonts/stampa',
        destCss: 'less',
		    options: {
    			font: 'stampa-light',
    			ligatures: true,
    			engine: 'fontforge',
          hashes: false,
          template: 'grunt-templates/stampa-template',
          htmlDemoTemplate: 'grunt-templates/demo'
    			}
  		}
	},
    watch: {
      files: ['icons/*.svg'],
      tasks: ['webfont']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webfont');
  grunt.registerTask('default', ['webfont']);

};
