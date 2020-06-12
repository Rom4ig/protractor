pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t test .'
            }
        }
                stage('Run') {
                    steps {
                        sh 'docker run  -v $(pwd)/docker/:/usr/src/app/logs test'
                    }
                }
    }
}