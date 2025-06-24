pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build || echo "No build script"'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy stage (customize as needed)'
            }
        }
    }
}
