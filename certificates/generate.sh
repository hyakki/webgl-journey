#!/bin/bash

rm server.*

# Generate a 2048bit RSA private key and save it to a file:
openssl genrsa -out server.key 2048

# Generate a certificate signing request to be sent to a certificate authority:
openssl req -new -sha256 -key server.key -out server.csr

# Generate a self-signed certificate from a certificate signing request valid for some number of days:
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
