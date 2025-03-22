# Text Case Converter

This repository contains a **Text Case Converter** application designed as a **static website**. It supports **Docker-based containerization** and **Kubernetes deployment** using **Jenkins for CI/CD automation**.

📄 **Daily Tasks:** The **daily-tasks.pdf** file contains a **detailed log of daily progress and tasks performed**.  

## Repository Contents

- **Project Files**
  - `index.html` - Main frontend file for the text case converter.
  - `assets/` - Contains images, styles, and scripts.
  - `styles.css` - CSS styles for UI design.
  - `scripts.js` - JavaScript logic for text conversion.

- **Deployment & CI/CD**
  - `Dockerfile` - Defines the containerization setup.
  - `deployment.yaml` - Kubernetes deployment configuration for Minikube.
  - `jenkins-pipeline` - Jenkins pipeline script for automation.
  
- **Documentation & Licensing**
  - `README.md` - Instructions for setup and deployment.
  - `Project-README.md` - Additional project details.
  - `LICENSE` - Open-source licensing information.
  - `daily-tasks.pdf` - **Contains the list of daily tasks performed**.

## Tasks Covered in This Repo

1. **Dockerization**
   - The application is containerized using a **Dockerfile**.
   - Jenkins pipeline builds and pushes the image to **Docker Hub**.

2. **CI/CD with Jenkins**
   - Jenkins pipeline automates **Git checkout, Docker build & push**.
   - Required plugins and credentials setup is documented.

3. **Kubernetes Deployment**
   - `deployment.yaml` configures **Pods, Deployments, and Services**.
   - Minikube is used for local Kubernetes testing.

4. **Setup & Installation**
   - Instructions provided for **installing Jenkins, Minikube, Docker, and required plugins**.
   - Jenkins pipeline execution and Kubernetes deployment steps are included.

---

This repository is a **complete package** for building, containerizing, automating, and deploying a simple web application using **Docker, Jenkins, and Kubernetes**. 🚀  
