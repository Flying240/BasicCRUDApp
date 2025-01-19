/**
    *! Route Definitions:
    * This file defines all routes and their corresponding handlers.
    * Each route is associated with a specific HTTP method and handler function.
*/

//write all routes
const express = require("express");
const router = express.Router();

//import dependenices
const { read, ReadALL, ReadOne } = require("./RouteHandler/Read");
const { Add } = require("./RouteHandler/Add");
const { Edit } = require("./RouteHandler/Edit");
const { Delete } = require("./RouteHandler/Delete");

//routers
router.get("/", read);
router.post("/add", Add);
router.get("/read", ReadALL);
router.post("/edit/:id", Edit);
router.get("/read/:id", ReadOne);
router.delete('/delete/:id', Delete);

module.exports = router;
