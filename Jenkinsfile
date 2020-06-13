pipeline {
  environment {
    registry = 'k1ck3rtw/udacity-capstone'
    registryCredential = 'dockerhub_id'
    awsCredential = 'aws'
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
            dockerImage.push('latest')
          }
        }
      }
    }
    stage('Deploy to AWS EKS Cluster') {
      steps {
        dir('k8') {
            withAWS(credentials: 'aws-credentials', region: 'us-east-2') {
                sh "aws eks --region us-east-2 update-kubeconfig --name tw-capstone"
                sh 'kubectl apply -f deployment.yml'
              }
            }        
      }
    }
    stage('Docker image cleaning up') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
        sh "docker rmi $registry"
      }
    }
  }
}