pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Node Version') {
      steps {
        bat 'node -v'
        bat 'npm -v'
      }
    }

    stage('Install') {
      steps {
        bat 'npm install'
      }
    }

    stage('Test') {
      steps {
        // If you don't have tests configured, this avoids failing the build.
        bat 'echo Skipping tests'
        // Later enable:
        // bat 'npm test'
      }
    }
  }

  post {
    success { echo "✅ Build successful" }
    failure { echo "❌ Build failed" }
  }
}