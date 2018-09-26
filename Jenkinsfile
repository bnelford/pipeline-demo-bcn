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
                    sh 'docker build -t bnelford/marco-polo-app .'
                }
            }
            stage('Deploy Dev') {
                steps {
                    sh 'docker run -d --name marco-polo-dev -p 3003:3000 bnelford/marco-polo-app:latest'
                    sh 'sleep 5'
                }
            }
            stage('Run Dev Integration Tests') {
                steps {
                    sh 'npm test integration-tests/dev-integrationtests.js'
                }
            }
            stage('Deploy Test') {
                steps {
                    sh 'docker run -d --name marco-polo-test -p 3002:3000 bnelford/marco-polo-app:latest'
                    sh 'sleep 5'
                }
            }
            stage('Run Test Integration Tests') {
                steps {
                    sh 'npm test integration-tests/test-integrationtests.js'
                }
            }
            stage('Deploy Stage') {
                steps {
                    sh 'docker run -d --name marco-polo-stage -p 3001:3000 bnelford/marco-polo-app:latest'
                    sh 'sleep 5'
                }
            }
            stage('Run Stage Integration Tests') {
                steps {
                    sh 'npm test integration-tests/stage-integrationtests.js'
                }
            }
        }

    timeout(time: 5, unit: 'SECONDS') {
        input 'Do you want to proceed to the Deployment?'
    }

    stages {
        stage('Deploy Prod') {
            steps {
                sh 'docker run -d --name marco-polo-prod -p 3000:3000 bnelford/marco-polo-app:latest'
                sh 'sleep 5'
            }
        }
        stage('Run Prod Integration Tests') {
            steps {
                sh 'npm test integration-tests/prod-integrationtests.js'
            }
        }
    }
    post {
        cleanup {
            sh 'docker kill marco-polo-dev'
            sh 'docker kill marco-polo-test'
            sh 'docker kill marco-polo-stage'
            sh 'docker kill marco-polo-prod'
            sh 'docker rm marco-polo-dev'
            sh 'docker rm marco-polo-test'
            sh 'docker rm marco-polo-stage'
            sh 'docker rm marco-polo-prod'
        }
    }
}