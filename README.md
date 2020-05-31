# UdacityDevOpsCapstone

## Project Scope
For my capstone project, I will be deploying a small ExpressJS app showing a page displaying the machine's IP. I will setup a Jenkins server and establish a pipeline with the following steps:
- Pull the source code from the github repo. 
- ESLint the ExpressJS app
- Hadolint the Dockerfile.
- Build an image w/ the linted Dockerfile
- Create/Update my AWS infrastructure using a Cloud Formation Template
- Deploy to EKS via rolling deployment
