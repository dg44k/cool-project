pipeline {
    agent any
    
    stages {
         stage('Clear container') {
            steps {
		sh 'docker rm --force mycontainer'
            }
        }
	stage('Build') {
	    steps {
		sh 'docker build -t myapp:1.0 .'
	    }
	}
	stage('Push Docker Image') {
	    steps {
	        script {
	            docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-dg-cred') {
			docker.image("dg44k/myapp:1.0").push()
	            }
	        }
	    }
	}
	stage('Deploy') {
	    steps {
		sh 'docker run -d -p 3001:3001 --name mycontainer myapp:1.0'
	    }
	}
    }
}
