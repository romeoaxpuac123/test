pipeline {
    agent any
    stages {
        stage('npm instalado') {
            steps {
                sh 'npm --version'
            }
        }
		stage('existen complementos') {
            steps {
                sh '''
					bash -c "ls /node_modules_error"
					
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