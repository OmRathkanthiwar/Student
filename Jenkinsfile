pipeline {
    agent any

    environment {
        KUBECONFIG = '/home/administrator/.kube/config'
        MINIKUBE_HOME = '/home/administrator/.minikube'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test Website') {
            steps {
                sh '''
                    echo "Starting Student Task Manager build..."
                    test -f index.html
                    echo "index.html found successfully"
                    echo "Build completed successfully"
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t stu_name_1:latest .
                '''
            }
        }

        stage('Load Image into Minikube') {
            steps {
                sh '''
                    minikube image load stu_name_1:latest
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                    kubectl apply -f deployment.yaml
                    kubectl apply -f service.yaml
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                    kubectl rollout status deployment/stu-name
                    kubectl get deployment stu-name
                    kubectl get pods
                    kubectl get service stu-name
                '''
            }
        }
    }
}
