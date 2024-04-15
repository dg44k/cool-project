pipeline {
    agent {
        label 'MeRunner'
    } 
    tools {nodejs "NodeJsKursach"}
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            } 
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker build -t myapp .'
                sh 'docker run -d -p 3001:3001 --name mycontainer myapp'
            }
        }
    }
}
