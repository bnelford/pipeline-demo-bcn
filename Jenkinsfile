pipeline {
    agent any
    stages {
        stage('Run Unit Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Package') {
            steps {
                sh 'docker build -t bnelford/marco-polo-test .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker run -d -p 3000:3000 bnelford/marco-polo-test:latest'
            }
        }
    }
}