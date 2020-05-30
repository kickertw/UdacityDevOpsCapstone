pipeline {
    agent any
    stages {
        stage('Lint HTML') {
              steps {
                  sh 'sudo apt-get install -y tidy'
                  sh 'tidy -q -e *.html'
              }
        }
    }
}
