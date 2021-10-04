import express from "express";
import { APP_PORT } from "./config";
require("./db/conn")
const route = require("./route")

const app = express()
app.use(express.json())
app.use(route)

app.listen(APP_PORT, () => { console.log(`listning on ${APP_PORT}`) })