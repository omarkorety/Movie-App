pipeline {

    agent any

    stages{
        stage('Build App Image') {
          steps {
            script {
              withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) { 

              sh """
                docker build .  -t omarkorety/movieapp:V${BUILD_NUMBER}
                echo ${BUILD_NUMBER}
                docker login -u ${USERNAME} -p ${PASSWORD}
                docker push omarkorety/movieapp:V${BUILD_NUMBER}
                echo ${BUILD_NUMBER} > ../build_num.txt
                """
                    }
                        } 
                }
            }
    }

        // stage('Upload Image'){
        //   steps{
        //     script {
        //       docker.withRegistry('', registryCredential) {
        //         dockerImage.push("V$BUILD_NUMBER")
        //         dockerImage.push('latest')
        //       }
        //     }
        //   }
        // }

        
    }


