pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('Install packages') {
      steps {
        bat 'npm i'
      }
    }
     stage('Run test') {
          steps {
            bat 'npm test'
          }
        }
  }
}