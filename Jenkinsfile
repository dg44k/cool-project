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
		sh 'docker build -t myapp .'
	    }
	}
	stage('Docker Hub Login') {
	    steps {
	        script {
	            docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-dg-cred') {
			sh "docker tag dg44k/myapp dg44k/myapp:latest"
			docker.image("dg44k/myapp:latest").push()
	            }
	        }
	    }
	}
	stage('Push Docker Image') {
	    steps {
	        script {
	            docker.image('myapp:latest').push('dg44k/myapp:1.0.0')
	        }
	    }
	}
	stage('Deploy') {
	    steps {
		sh 'docker run -d -p 3001:3001 --name mycontainer myapp'
	    }
	}
    }
}
