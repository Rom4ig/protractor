pipeline {
    agent {
        dockerfile true //{ image 'node:12' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}