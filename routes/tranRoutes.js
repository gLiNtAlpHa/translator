import { Router } from "express";
import { translator } from "../controller/trans.js";
const r = Router();

r.post("/", translator);
export default r;
