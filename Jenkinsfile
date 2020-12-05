pipeline {
    agent any
    stages {
        stage('checkout-git') {
            steps {
                sh 'npm --version'
            }
        }
		stage('checkout-git2') {
            steps {
                sh 'bash -c ls node_modules'
            }
        }
		stage('Correr App') {
            steps {
                sh 'forever -w start app.js'
            }
        }
    }
}