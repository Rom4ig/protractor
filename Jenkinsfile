pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('Install packages') {
      steps {
        bat 'npm install'
      }
    }
    stage('Test') {
      steps {
        bat 'npm test'
      }
    }
  }
}