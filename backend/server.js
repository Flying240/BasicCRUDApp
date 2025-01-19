const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();
const MdURL = process.env.MongoDB_URL;
const portNo = process.env.PORT_NO || 8000;

const mongoose = require("mongoose");
mongoose
    .connect(MdURL)
    .then(() => {
        console.log("Connected to MongoDB");

        app.listen(portNo, () => {
            console.log(`http://localhost:${portNo}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

// Middleware
app.use(express.json());
const cors = require("cors");
app.use(cors());

// Import routes
const userRouter = require("./routes");
app.use("/", userRouter);

/**
*! How it works:
    Flow Summary:
    Client request -> SERVER Port -> ROUTER (matches Method and URL of routes)
    -> ROUTE HANDLER (function) -> SERVER returns response -> CLIENT

*   1. The client (e.g., Postman or browser) sends an HTTP request to the server via a URL.
        - URL Domain Name -> to the server's IP address [DNS lookup].
        - TCP Connection: The client establishes a connection with the server on a specific PORT.
        - Request Sent: The HTTP request (method, headers, and body) is sent over this connection.

*   2. The server listens on the specified PORT and receives the request.

*   3. The server passes the request to the router, which matches the request's HTTP method (e.g., GET, POST) 
       and URL path to the corresponding route.

*!  4. The router invokes the appropriate route handler (a function defined in your code) for processing.

*   5. The route handler processes the request (e.g., interacting with a database or performing logic) and 
       sends a response (e.g., JSON, HTML, or status codes) back to the client thorugh server.

*   6. The client (e.g., Postman or browser) receives the response and displays the result.
*/
