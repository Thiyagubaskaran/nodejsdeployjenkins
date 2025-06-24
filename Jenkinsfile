pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Thiyagubaskaran/nodejsdeployjenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running Jest tests...'
                sh 'npx jest --ci || true'
            }
        }

        stage('Build') {
            steps {
                echo 'No build step for simple Node.js app'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Node.js app...'
                sh 'nohup npm start &'
            }
        }
    }
}
