module.exports = function(grunt){
        grunt.initConfig({
                shell: {
                        build: {
                                command: [
					'sudo docker build -t xantin/node-web-app .',
					'sudo docker rm -f node-web-app',
					'sudo docker run -p 49160:8080 -d --name node-web-app  xantin/node-web-app' 
                			].join(' && ')
			        }
                },
                watch: {

                        dockerBuild: {
                                files: '*.js',
                                tasks: ['shell']
                        }

                }
        });

        grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');

};

