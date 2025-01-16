package main

import (
	"fmt"
	"net"
)

func main() {
	l, err := net.Listen("tcp", "0.0.0.0:8080")

	if err != nil {
		fmt.Println("Failed to bind 0.0.0.0:8080")
		return
	}

	conn, err := l.Accept()
	if err != nil {
		fmt.Println("bd")
		return
	}

	conn.Write([]byte("cooked right now"))
	conn.Close()
}
