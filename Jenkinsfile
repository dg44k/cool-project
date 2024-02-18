pipeline {
    agent any
    
    stages {
        stage('Build') {
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
                sh 'docker build -t my-node-app .'
                sh 'docker run -p 80:80 my-node-app'
            }
        }
    }
}
