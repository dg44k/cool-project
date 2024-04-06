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
                def containerId = sh(script: 'docker run -d -p 3030:3030 myapp', returnStdout: true).trim()
                sleep time: 30, unit: 'SECONDS'
                sh "docker stop ${containerId}"
            }
        }
    }
}
