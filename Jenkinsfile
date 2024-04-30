pipeline {
    agent any

   environment { 
	registry = "dg44k/myapp" 
	registryCredential = 'dockerhub-dg-cred' 
	dockerImage = '' 
    }
	
    stages {
         stage('Clear container') {
            steps {
		sh 'docker rm --force mycontainer'
            }
        }
	  stage('Building our image') { 
            steps { 
                script { 
                    dockerImage = docker.build registry + ":$BUILD_NUMBER" 
                }
            } 
        }
	stage('Push Docker Image') {
	    steps {
	        script {
	            docker.withRegistry('', registryCredential) {
			dockerImage.push() 
	            }
	        }
	    }
	}
	stage('Deploy') {
	    steps {
		sh 'docker run -d -p 3001:3001 --name mycontainer myapp:$BUILD_NUMBER'
	    }
	}
    }
}
