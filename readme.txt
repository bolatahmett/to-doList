We will Use TDD approach

Version control system: Git.

Ui: React.
    -Create container: docker build -f Dockerfile -t client .
    -Run container: docker run -it -p 9000:9000 client


BackEnd: Golang
    -Create container: docker build --tag server .
    -Run container: docker run -it -p 3000:3000 server

Database: FireBase

Hosting:  Firebase

Deployment: Git and Firebase