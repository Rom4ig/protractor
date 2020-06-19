pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker-compose up'
            }
        }
                    post { always {
                    sh 'docker-compose down'
                    allure ([
                        includeProperties: false,
                        jdk: '',
                        reportBuildPolicy: 'ALWAYS',
                        results: [[path: 'docker/allure-results']]
                       ])
                    }}
}