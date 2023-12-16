// import { Express } from "express";
// import { takeUrl, getUrl } from "../Controller/postUrl.js";
// const route = Express.Router();

// route.post("/", (req,res)=>takeUrl(req,res));
// route.get("/", (req,res)=>getUrl(req,res));

// export default route;

import { Router } from "express";
import postUrl from "../Controller/postUrl.js";
import { getUrl } from "../Controller/getUrl.js";

const route = Router();


route.post("/", postUrl);
route.get("/:id", getUrl);

export default route;
