pipeline {
  agent any

  tools {
    nodejs 'NodeJS'
  }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Install') {
      steps { bat 'npm ci' }
    }

    stage('Test') {
      steps {
        // If you don’t have tests yet, change to: bat 'node -v'
        bat 'npm test'
      }
    }
  }

  post {
    success { echo "✅ Success on ${env.BRANCH_NAME}" }
    failure { echo "❌ Failed on ${env.BRANCH_NAME}" }
  }
}
