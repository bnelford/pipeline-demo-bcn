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
    }
}