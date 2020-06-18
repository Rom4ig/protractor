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
                        sh 'docker run  --rm -v $(pwd)/docker/:/usr/src/app/logs test'
                    }
                }
    }
                    post { always {
                    sh 'docker rmi test'
                    allure ([
                        includeProperties: false,
                        jdk: '',
                        reportBuildPolicy: 'ALWAYS',
                        results: [[path: 'docker/allure-results']]
                       ])
                    }
                    }
}