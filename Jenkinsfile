pipeline {
    agent any
    stages {
        stage('ESLinter') {
            steps {
                sh 'npx eslint index.js'
            }
        }
        stage('Hadolint Dockerfile') {
            steps {
                sh 'hadolint Dockerfile'
            }
        }
    }
}
