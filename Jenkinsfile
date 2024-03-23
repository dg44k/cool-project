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
                sh 'docker run -p 3002:3001 myapp'
            }
        }
    }
    post {
        success {
            echo 'Pipeline successfully completed!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
