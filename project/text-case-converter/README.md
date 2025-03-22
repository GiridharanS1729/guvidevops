
# Text Case Converter

This repository contains a simple static website for converting text case. The application is containerized using Docker and can be deployed on a Kubernetes cluster using Minikube and Jenkins for CI/CD.

<details>
    <summary><strong>If Using WSL for This Project, Run This Command:</strong></summary>
    <p>
        <code>wsl --install</code>  
        <code>wsl --install -d Ubuntu</code>  
        <code>Ubuntu</code>  
    </p>
    <p>👉 Installs the latest Ubuntu in WSL.</p>
</details>


## Requirements
- **Ubuntu Terminal**
- **Install the following tools:**
  - Docker
  - Minikube
  - Java 
  - Jenkins 

## Installation Commands
### Install Java & Jenkins (LTS)
Refer to: [Jenkins Installation Guide](https://www.jenkins.io/doc/book/installing/linux/)

### Install Minikube
```sh
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl wget apt-transport-https
curl -LO "https://dl.k8s.io/release/$(curl -Ls https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
rm kubectl
kubectl version --client
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
rm minikube-linux-amd64
minikube version
minikube start --driver=docker
minikube status
```

### Install Docker
```sh
sudo apt install docker.io
```

### Install Kubectl
```sh
sudo snap install kubectl --classic
kubectl version --client
```

### Grant Jenkins Docker Access
```sh
sudo usermod -aG docker jenkins
sudo chmod 666 /var/run/docker.sock
sudo systemctl restart jenkins
sudo systemctl status jenkins
```

## Required Jenkins Plugins
- Docker API Plugin
- Docker Commons Plugin
- Docker Pipeline
- Docker plugin
- NodeJS Plugin
- Eclipse Temurin Installer Plugin
- Pipeline: Stage View Plugin
- Maven Integration Plugin (if using Spring Boot, optional)

## Setup Tools
- **JDK**: Install from [Adoptium](https://adoptium.net/)
- **Docker**: Install from [Docker.com](https://www.docker.com/) (Latest version)
- **NodeJS**: Install the version available on your device

## Add Credentials in Jenkins
- **GitHub Credentials:**
  - **ID:** `github_seccred`
  - **Username:** GitHub username
  - **Password:** GitHub Personal Access Classic Token (PAT) from Developer Tools
- **Docker Hub Credentials:**
  - **ID:** `docker`
  - **Username:** Docker Hub username
  - **Password:** Docker Hub password

## Deployment Instructions

### 1. Deploying with Jenkins

#### Prerequisites
- A running Jenkins instance with Docker and Kubernetes plugins installed.
- Jenkins configured with credentials for GitHub and Docker Hub.

#### Steps:
1. **Create a new Jenkins pipeline job** and link it to this repository.
2. **Add credentials**:
   - GitHub: `github_seccred`
   - Docker Hub: `docker`
3. **Paste the pipeline script** from `jenkins-pipeline-script` file in Jenkins pipeline configuration.
4. **Run the pipeline**, which will:
   - Clone the repository.
   - Build and push the Docker image.

### 2. Deploying with Kubernetes (Minikube)

#### Prerequisites
- A running Minikube cluster.
- Kubectl installed and configured to use Minikube.

#### Steps:
1. **Start Minikube:**
   ```sh
   minikube start
   ```
2. **Create or edit the deployment configuration file:**
   ```sh
   nano deployment.yaml
   ```
   - Ensure `deployment.yaml` exists in this repository with the required configurations.
3. **Apply the deployment configuration:**
   ```sh
   kubectl apply -f deployment.yaml
   ```
4. **Check the pod and service status:**
   ```sh
   kubectl get pods
   kubectl get services
   ```
5. **Access the application:**
   ```sh
   minikube service static-website-service
   ```
   This will open the application in the browser.

## Notes
- The Docker image is already built and pushed using Jenkins pipeline.
- The service is exposed as a LoadBalancer for external access in Minikube.
