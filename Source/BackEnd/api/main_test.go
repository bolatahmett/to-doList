package main

import (
	"testing"

	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"os"
)

var a App

func TestMain(m *testing.M) {
	a.Initialize()
	code := m.Run()
	os.Exit(code)
}

func executeRequest(req *http.Request) *httptest.ResponseRecorder {
	rr := httptest.NewRecorder()
	a.Router.ServeHTTP(rr, req)

	return rr
}

func checkResponseCode(t *testing.T, expected, actual int) {
	if expected != actual {
		t.Errorf("Expected response code %d. Got %d\n", expected, actual)
	}
}

func TestGetNonExistentTask(t *testing.T) {

	req, _ := http.NewRequest("GET", "/task/11", nil)
	response := executeRequest(req)

	checkResponseCode(t, http.StatusNotFound, response.Code)

	var m map[string]string
	json.Unmarshal(response.Body.Bytes(), &m)
	if m["message"] != "Task not found" {
		t.Errorf("Expected the 'message' key of the response to be set to 'Task not found'. Got '%s'", m["message"])
	}
}

func TestCreateTask(t *testing.T) {

	var jsonStr = []byte(`{"Id": "5","Task": "task5"}`)
	req, _ := http.NewRequest("POST", "/task", bytes.NewBuffer(jsonStr))
	req.Header.Set("Content-Type", "application/json")

	response := executeRequest(req)
	checkResponseCode(t, http.StatusCreated, response.Code)

	var m map[string]interface{}
	json.Unmarshal(response.Body.Bytes(), &m)

	if m["Task"] != "task5" {
		t.Errorf("Expected task to be 'test task'. Got '%v'", m["Task"])
	}
}

func TestGetTask(t *testing.T) {

	req, _ := http.NewRequest("GET", "/task/1", nil)
	response := executeRequest(req)

	checkResponseCode(t, http.StatusOK, response.Code)
}
