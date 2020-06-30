pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                 //for fail tests
                 //sh 'docker-compose up --exit-code-from wdio'
                 sh 'docker-compose up --no-start'
                 sh 'docker-compose run  wdio'
                 //with env
                 //sh 'docker-compose run -e USER="Роман Грунковский" -e LOGIN="romses2000@mail.ru" -e PASSWORD="qwerty228" wdio'
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
