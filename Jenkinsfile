pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('Install packages') {
      steps {
        sh 'docker build -t test .'
      }
    }
    stage('Test') {
      steps {
        sg 'docker run test'
      }
    }
  }
}