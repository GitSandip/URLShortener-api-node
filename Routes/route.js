// import { Express } from "express";
// import { takeUrl, getUrl } from "../Controller/postUrl.js";
// const route = Express.Router();

// route.post("/", (req,res)=>takeUrl(req,res));
// route.get("/", (req,res)=>getUrl(req,res));

// export default route;

import { Router } from "express";
import { takeUrl, getUrl } from "../Controller/postUrl.js";

const route = Router();

// Use arrow functions as route handlers
route.post("/", takeUrl);
route.get("/", getUrl);

export default route;
