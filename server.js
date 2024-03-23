const express = require("express");

// Importing necessary modules and middleware
const connectDatabase = require("./app/database/databaseInit");
const { SERVER_PORT } = require("./app/constants");
const errorHandler = require("./app/middleware/errorHandlers");

const userRouter = require("./app/routes/userRoutes");
/* WRITE YOUR CODE HERE TO IMPORT ALL OTHER ROUTERS */

const cartRouter = require("./app/routes/cartRoutes");
const orderRouter = require("./app/routes/orderRoutes");

const app = express();

var cors = require("cors");

app.use(cors());

// Connecting to the database
connectDatabase();

// Parsing incoming requests as JSON and handling errors
app.use(express.json());
app.use(errorHandler);

var requestBodyParser = require("body-parser");

// Parsing request bodies
app.use(requestBodyParser.json({ limit: "5mb" }));
app.use(
  requestBodyParser.urlencoded({
    limit: "5mb",
    extended: true,
    parameterLimit: 50000,
  })
);

// Using routers for different API endpoints
app.use("/api/v1/users", userRouter);
/* WRITE YOUR CODE HERE TO USE OTHER ROUTERS FOR DIFFERENT API ENDPOINTS */

app.use("/api/v1/carts", cartRouter);
app.use("/api/v1/orders", orderRouter);

// Endpoint to check if the server is running
app.get("/PING", (_, res) => {
  res.status(200).json({
    message: "PONG",
  });
});

// Starting the server
app.listen(SERVER_PORT, () => {
  console.log(`Server is running at port : ${SERVER_PORT}`);
});