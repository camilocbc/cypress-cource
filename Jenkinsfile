import groovy.json.JsonOutput

def COLOR_MAP = [
    'SUCCESS': 'good',
    'FAILURE': 'danger'
]

def getBuildUser(){
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}


pipeline{
    agent any

    environment{
        BUILD_USER = ''
    }

    parameters{
        string(name:'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the script path that you want to execute")
        choice(name: 'BROWSER', choices:['chrome','edge','firefox'],description: "Choice the browser where you want to execute your scripts")
    }

    options{
        ansiColor('xterm')
    }
    stages{
        stage('Building'){
            steps{
                echo "Building the application"    
            }
        }
        stage('Testing'){
             steps{
               
                    bat "npm i"
                    bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
               
            }
        }
        stage('Deploying'){
            steps{
                echo "Deploy the application"
            }    
        }
    }

    post{
        always{

            script{
                BUILD_USER = getBuildUser()
            }

            slackSend channel: '#jenkins-example',
                      color: COLOR_MAP[currentBuild.currentResult],
                      message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} build ${env.BUILD_NAME} by ${BUILD_USER} \n Tests: ${SPEC} execute at ${BROWSER} \n More information at: ${env.BUILD_URL}HTML_20Report/"
            
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: false])
        }
    }
}