import { createSolution, getSolutions } from "../controllers/solution.js";
import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";

const route = express.Router();

//Create Solutions
route.post("/", verifyAdmin, createSolution);

//Get all Solutions
route.get("/", getSolutions);

export default route;
