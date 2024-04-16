pipeline {
    agent any
    
    stages {
         stage('Deploy') {
            steps {
		        sh 'docker rm --force mycontainer'
                sh 'docker build -t myapp .'
                sh 'docker run -d -p 3000:3000 --name mycontainer myapp'
            }
        }
    }
}
