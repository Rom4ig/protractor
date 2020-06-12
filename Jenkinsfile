pipeline {
  agent any

  tools {docker "docker"}

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