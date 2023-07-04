import express from "express";
import bodyParser from "body-parser";
import r from "./routes/tranRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/translate", r);
app.listen(env.port || 5000, () => {
	console.log("running");
});
