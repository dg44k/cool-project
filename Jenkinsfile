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
            }
        }
    }
}
