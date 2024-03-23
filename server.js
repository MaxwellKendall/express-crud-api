require('dotenv').config();
const express = require("express");
var requestBodyParser = require("body-parser");

// Importing necessary modules and middleware
const connectDatabase = require("./app/database/databaseInit");
const { SERVER_PORT } = require("./app/constants");
const errorHandler = require("./app/middleware/errorHandlers");

const cartRouter = require("./app/routes/cartRoutes");
const orderRouter = require("./app/routes/orderRoutes");
const categoryRouter = require("./app/routes/categoryRoutes");
const userRouter = require("./app/routes/userRoutes");

const app = express();

var cors = require("cors");

/**
 * Application Architecture:
 * 1. Server.js is the callsite for routes/*
 * 2. Routes/ is the callsite for services/*
 * 3. Services/ is the callsite for database/repositories/*
 * 4. Database/repositories/* is the callsite for database/models/*
 */

/**
 * Implementations: Where functions are defined (function xyz () {})
 * Callsites/References: Where functions are invoked (xyz())
 */

/*
 * CROSS ORIGIN RESOURCE SHARING (CORS)
 * CORS --> allows usaspending.gov to call api.usaspending.gov
 * CORS --> allows localhost:3000 to call xyz.com/api (if xyz.com allows)
 * CORS --> allow * to call my api (literally anyone can call my api)
 *  -- IE: cors() and cors({ origin: "*" }) are the same thing.
 * CORS --> whitelist (only origins from my-ecommerce-app.com can call api.my-ecommerce-app.com)
 *  -- IE: cors({ origin: "my-ecommerce-app.com" })
*/ 
app.use(cors({
  origin: "*"
}));

// Connecting to the database
connectDatabase();

// Parsing incoming requests as JSON and handling errors
app.use(express.json());
app.use(errorHandler);

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
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/carts", cartRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/users", userRouter);

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