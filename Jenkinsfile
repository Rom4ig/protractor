pipeline {
  agent any

  //tools {nodejs "node"}

  stages {
    stage('docker') {
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