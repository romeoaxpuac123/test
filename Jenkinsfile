pipeline {
    agent any
    stages {

		stage('realizar pruebas') {
            steps {
                sh 'npm test'
            }
        }
		stage('iniciar cosas') {
            steps {
                sh '''
					bash -c ls node_modules
					
				'''
            }
        }
		stage('Correr App') {
            steps {
                sh 'forever -w start app.js'
            }
        }
    }
}