pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('Install packages') {
      steps {
        bat 'npm -г'
      }
    }
     stage('Run test') {
          steps {
            bat 'npm test'
          }
        }
  }
}