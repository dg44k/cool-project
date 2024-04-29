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
	            }
	        }
	    }
	}
	stage('Push Docker Image') {
	    steps {
	        script {
	            docker.image('myapp').push('dg44k/myapp')
	        }
	    }
	}
        stage('Delete docker image locally') {
            steps{
                sh 'docker rmi dg44k/myapp'
            }
        }
	stage('Deploy') {
	    steps {
		sh 'docker run -d -p 3001:3001 --name mycontainer myapp'
	    }
	}
    }
}
