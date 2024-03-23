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
                sh 'docker run -p 3001:3001 myapp'
            }
        }
    }
    post {
        success {
            echo 'Pipeline successfully completed!'
            currentBuild.result = 'SUCCESS'
        }
        failure {
            echo 'Pipeline failed!'
            currentBuild.result = 'FAILURE'
        }
    }
}
