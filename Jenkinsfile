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
	 stage('Deploy') {
	    steps {
		sh 'docker run -d -p 3001:3001 --name mycontainer myapp'
	    }
	}
    }
}
