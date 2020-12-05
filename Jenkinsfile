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
                sh 'npm --version'
            }
        }
		stage('Correr App') {
            steps {
                sh 'forever -w start app.js'
            }
        }
    }
}