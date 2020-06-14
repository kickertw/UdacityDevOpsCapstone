# UdacityDevOpsCapstone

## Project Scope
For my capstone project, I will be deploying a small ExpressJS app showing a page displaying the machine's IP. I will setup a Jenkins server and establish a pipeline with the following steps:
- Pull the source code from the github repo. 
- ESLint the ExpressJS app
- Hadolint the Dockerfile.
- Build an image w/ the linted Dockerfile
- Create/Update my AWS infrastructure using a Cloud Formation Template
- Deploy to EKS via rolling deployment
- Clean up Jenkins docker images

## Directories/Files of Importance
- **CloudFormation/1-EksVPC.template.json** - Cloudformation template to create the VPC to be used by my Kubernetes cluster. It sets up the necessary IAM roles for EKS, a VPC w/ 2 public subnets, and security groups
- **CloudFormation/2-EksCluster.template.json** - Cloudformation template to create the EKS cluster and nodegroup. This requires the first template to be run first.
- **k8/cap-app-deploy.yml** - A Kubernetes deployment template to deploy docker image/app
- **k8/load-balancer.yml** - A Kubernetes service to expose the pods to be externally accessible
- **Dockerfile** - The docker file with to create my nodejs/expressjs app
- **index.js** - The actual node app to be containerized and run