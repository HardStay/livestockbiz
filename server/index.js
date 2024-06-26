import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dinasRoute from "./routes/dinasRoute.js";
import peternakRoute from "./routes/peternakRoute.js";
import lokasiRoute from "./routes/lokasiRoute.js";
import hewanTernakRoute from "./routes/hewanTernakRoute.js";
import penjualanHewanTernakRoute from "./routes/penjualanHewanTernakRoute.js";
import aiBizRoute from "./routes/aiBizRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(dinasRoute);
app.use(peternakRoute);
app.use(lokasiRoute);
app.use(hewanTernakRoute);
app.use(penjualanHewanTernakRoute);
app.use(aiBizRoute);

app.listen(5000, () => console.log("Server running on port 5000"));
