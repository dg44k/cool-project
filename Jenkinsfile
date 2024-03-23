pipeline {
    agent any
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
                sh 'docker run -p 3000:3000 myapp'
            }
        }
    }
}
