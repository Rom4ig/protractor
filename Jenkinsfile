pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('Install packages') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}