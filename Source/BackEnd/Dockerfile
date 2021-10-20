# syntax=docker/dockerfile:1

FROM golang:1.16-alpine

WORKDIR /api

COPY /api/go.mod ./
COPY /api/go.sum ./

RUN go mod download

COPY /api/*.go ./

RUN go build -o main.exe

EXPOSE 3000

CMD [ "./main.exe" ]