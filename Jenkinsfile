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
	stage('Docker Hub Login') {
	    steps {
	        script {
	            docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-dg-cred') {
			docker.image("dg44k/myapp:1.0").push()
	            }
	        }
	    }
	}
	stage('Push Docker Image') {
	    steps {
	        script {
	            docker.image('myapp:1.0').push('dg44k/myapp:1.0')
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
