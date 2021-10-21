# syntax=docker/dockerfile:1

FROM golang:bullseye

WORKDIR /api

COPY /api/go.mod ./
COPY /api/go.sum ./

RUN go mod download

COPY /api/*.go ./

RUN go test -v
RUN go build -o main.exe

EXPOSE 3000

CMD [ "./main.exe" ]