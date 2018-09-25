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
                sh 'docker run -d --name marco-polo -p 3000:3000 bnelford/marco-polo-test:latest'
            }
        }
    }
    post {
        sh 'docker kill marco-polo'
        sh 'docker rm marco-polo'
    }
}