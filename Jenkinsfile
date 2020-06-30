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
                        sh 'docker run -e USER="Роман Грунковский" -e LOGIN="romses2000@mail.ru"
                        -e PASSWORD="qwerty228" --rm -v $(pwd)/docker/:/usr/src/app/logs test'
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
                    }}
}