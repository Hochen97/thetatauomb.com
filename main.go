package main

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	// Set the router as the default one shipped with Gin
	router := gin.Default()

	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("./views", true)))

	// router.LoadHTMLGlob("./views/*")
	// router.GET("/", func(c *gin.Context) {
	// 	c.HTML(http.StatusOK, "index.html", nil)
	// })
	// router.GET("/events", func(c *gin.Context) {
	// 	c.HTML(http.StatusOK, "events.html", nil)
	// })

	// Setup route group for the API
	// api := router.Group("/api")
	// {
	// 	api.GET("/", func(c *gin.Context) {
	// 		c.JSON(http.StatusOK, gin.H{
	// 			"message": "pong",
	// 		})
	// 	})
	// }

	// Start and run the server
	router.Run(":3001")
}
