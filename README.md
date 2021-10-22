# to-do List (React, Golang, Aws, Kubernates)

We will use TDD approach.

There are two applications, a server and a client. Both applications are hosted on Aws instance with kubernates. The hosting process is as below.

    1- The developer pushes her/his changes to the github repository
    2- Running github actions
        a- Dockerize
            -Build and test run in dockerfile
            -Create docker image
            -Upload to docker hub
        b- Deployment
            -Connecting the aws instance
            -Running minikube commands and deploying docker image from hub

Used technologies;

    Version control system: Git.
    Ui: React, javascript, nodejs, webpack, cypress 
    BackEnd: Golang
    Database: in-memory
    Hosting: Aws instance, Kubernates
    Deployment: Git actions

You can access docker containers from the docker hub and run:

    docker pull bolatahmett/todo_client:latest
    docker run -it -p 9000:9000 bolatahmett/todo_client 

    docker pull bolatahmett/todo_server:latest
    docker run -it -p 3000:3000 bolatahmett/todo_server 

Usefull links:

    https://docs.docker.com/engine/install/ubuntu/
    https://minikube.sigs.k8s.io/docs/start/
    https://www.section.io/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/
    https://learntdd.in/react/
    https://golang.org/doc/tutorial/web-service-gin
    https://docs.docker.com/ci-cd/github-actions/
    https://farhan-tanvir.medium.com/ci-cd-from-github-to-aws-ec2-using-github-action-e18b621c0507

Pipeline:

![Pipeline](./pipeline.png)
