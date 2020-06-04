pipeline {
  environment {
    registry = 'k1ck3rtw/udacity-capstone'
    registryCredential = 'dockerhub_id'
  }
  agent any
  stages {
    stage('ESLinter') {
        steps {
            sh 'npx eslint index.js'
        }
    }
    stage('Hadolint Dockerfile') {
        steps {
            sh 'hadolint --ignore DL4000 Dockerfile'
        }
    }      
    stage('Building our image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy our image') {
      steps{
        script {
          docker.withRegistry('', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Cleaning up') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}