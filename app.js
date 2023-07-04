import express from "express";
import bodyParser from "body-parser";
import r from "./routes/tranRoutes.js";

const app = express();
app.use(bodyParser.json());
app.use("/api/v1/translate", r);
app.listen(5000, () => {
	console.log("running");
});
