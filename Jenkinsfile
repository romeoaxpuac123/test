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
					bash -c "ls /node_modules"
					
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