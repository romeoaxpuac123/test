pipeline {
    agent any
    stages {
        stage('Verificar Repositorio') {
            steps {
                git poll: true,url: 'https://github.com/romeoaxpuac123/test.git'
            }
        }
    }
}