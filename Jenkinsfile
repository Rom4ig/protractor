pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                   sh 'docker-compose up --exit-code-from wdio'
                //sh 'docker-compose up --no-start'
                //sh 'docker-compose run wdio'
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
