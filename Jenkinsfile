pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npx cucumber-js'
            }
        }
        stage('Generate Allure Report') {
            steps {
                bat 'allure generate allure-results -o allure-report --clean'  // ← Add this
            }
        }
    }
    post {
        always {
            allure(
                includeProperties: false,
                jdk: '',
                commandline: 'allure',
                results: [[path: 'allure-results']]
            )
            publishHTML([
                allowMissing: true,           // ← changed to true
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'reports',
                reportFiles: 'cucumber-report.html',
                reportName: 'Cucumber HTML Report'
            ])
        }
    }
}