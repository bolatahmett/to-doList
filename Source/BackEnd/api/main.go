package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/gorilla/handlers"
)

type App struct {
	Router *gin.Engine
}

type task struct {
	Id   string `json:"Id"`
	Task string `json:"Task"`
}

var tasks = []task{
	{Id: "1", Task: "Task 1"},
	{Id: "2", Task: "Task 2"},
	{Id: "3", Task: "Task 3"},
}

func (a *App) Initialize() {
	a.Router = gin.Default()

	a.Router.GET("/task", getTasks)
	a.Router.GET("/task/:id", getTaskByID)
	a.Router.POST("/task", postTask)

}

func getTasks(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, tasks)
}

func getTaskByID(c *gin.Context) {
	id := c.Param("id")

	for _, a := range tasks {
		if a.Id == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Task not found"})
}

func postTask(c *gin.Context) {
	var newTask task
	if err := c.BindJSON(&newTask); err != nil {
		return
	}

	tasks = append(tasks, newTask)
	c.IndentedJSON(http.StatusCreated, newTask)
}

func main() {

	a := App{
		Router: gin.Default(),
	}

	a.Initialize()

	credentials := handlers.AllowCredentials()
	methods := handlers.AllowedMethods([]string{"GET", "POST", "OPTIONS"})
	origins := handlers.AllowedOrigins([]string{"http://localhost:9000", "http://localhost:9000/"})
	headers := handlers.AllowedHeaders([]string{"*"})
	log.Fatal(http.ListenAndServe(":3000", handlers.CORS(credentials, methods, origins, headers)(a.Router)))

}
