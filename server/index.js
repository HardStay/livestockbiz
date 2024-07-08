import express from "express";
import session from "express-session";
import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import dinasRoute from "./routes/dinasRoute.js";
import peternakRoute from "./routes/peternakRoute.js";
import lokasiRoute from "./routes/lokasiRoute.js";
import hewanTernakRoute from "./routes/hewanTernakRoute.js";
import penjualanHewanTernakRoute from "./routes/penjualanHewanTernakRoute.js";
import aiBizRoute from "./routes/aiBizRoute.js";
import authRoute from "./routes/authRoute.js";
import SequelizeStore from "connect-session-sequelize";
import db from "./config/database.js";

const app = express();

const sessionStore = new SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(dinasRoute);
app.use(peternakRoute);
app.use(lokasiRoute);
app.use(hewanTernakRoute);
app.use(penjualanHewanTernakRoute);
app.use(aiBizRoute);
app.use(authRoute);

// store.sync();

app.listen(5000, () => console.log("Server running on port 5000"));
