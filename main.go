package main

import (
	"fmt"
	"net/http"
)

func main() {
	router := http.NewServeMux()
	router.HandleFunc("GET /", myHandler)
	http.ListenAndServe(":8080", router)
}

func myHandler(writer http.ResponseWriter, request *http.Request) {
	fmt.Println(request)

}
