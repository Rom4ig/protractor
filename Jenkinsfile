pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker-compose up --no-start'
                sh 'docker-compose run sut'
            }
        }}
         post { always {
            sh 'docker-compose down --rmi all'
            allure ([
               includeProperties: false,
               jdk: '',
               reportBuildPolicy: 'ALWAYS',
               results: [[path: 'docker/allure-results']]
        ])
    }}
}