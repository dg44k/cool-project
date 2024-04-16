pipeline {
    agent any
    
    stages {
         stage('Deploy') {
            steps {
		sh 'docker rm --force mycontainer'
                sh 'docker build -t myapp .'
                sh 'docker run -d -p 3001:3001 --name mycontainer myapp'
            }
        }
    }
}
