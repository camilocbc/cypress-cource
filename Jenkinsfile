pipeline{
    agent any

    parameters{
        string(name:'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the script path that you want to execute")
        choice(name: 'BROWSER', choices:['chrome','edge','firefox'],description: "Choice the browser where you wnat to execute your scripts")
    }

    options{
        ansiColor('xterm')
    }
    stages{
        stage('Building'){
            echo "Building the application"
        }
        stage('Testing'){
            bat "npm i"
            bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
        }
        stage('Deploying'){
            echo "Deploy the application"
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}