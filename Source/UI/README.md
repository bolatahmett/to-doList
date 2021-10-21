# Client

Run with source code:

    npm start: Running client (http://localhost:9000)
    npm run-script test: Running cypress test

Run with docker container:

    docker pull bolatahmett/todo_client:latest
    docker run -it -p 9000:9000 bolatahmett/todo_client 
    You can see in the browser: http://localhost:9000

Run with kubernates:

Command | Comment
------------ | -------------
minikube start | start kubernates
alias kubectl="minikube kubectl --" | alias
minikube kubectl -- get po -A | list of deployment
kubectl create deployment client --image=bolatahmett/todo_client | creat deployment from docker image
kubectl expose deployment client --type=NodePort --port=9000 | add deployment
kubectl get services client | create service
kubectl port-forward service/client 9000:9000 | forward your port

Test: curl http://localhost:9000
![Alt Text](../Kubernates/client.gif)
