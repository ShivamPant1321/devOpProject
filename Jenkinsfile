pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }

    environment {
        PATH = "C:\\Program Files\\Amazon\\AWSCLIV2\\;$PATH"
    }

    stages {
        stage('Checkout Git Repo') {
            steps {
                git url: "https://github.com/ShivamPant1321/devOpProject", branch: "main"
            }
        }
        stage('NPM Install') {
            steps {
                bat "npm install"
            }
        }
        stage('Node Build') {
            steps {
                bat "npm run build"
            }
        }
        stage('S3 Deploy') {
    steps {
        withCredentials([usernamePassword(
            credentialsId: '797345580',
            usernameVariable: 'AWS_ACCESS_KEY_ID',
            passwordVariable: 'AWS_SECRET_ACCESS_KEY'
        )]) {
            bat '''
                set AWS_ACCESS_KEY_ID=%AWS_ACCESS_KEY_ID%
                set AWS_SECRET_ACCESS_KEY=%AWS_SECRET_ACCESS_KEY%
                aws s3 sync dist/ s3://jhc-reactapp --delete
            '''
        }
    }
}
    }
}
