#!/usr/bin/python

import SimpleHTTPServer
import SocketServer

PORT = 8000

httpd = SocketServer.TCPServer(("", PORT), SimpleHTTPServer.SimpleHTTPRequestHandler)

print "Serving at port", PORT
httpd.serve_forever()
