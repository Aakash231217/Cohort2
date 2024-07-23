const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const mainRouter = require("./routes/index");


app.use("/api/v1",mainRouter);
//app.use("/api/v2",v2Router);



app.listen(3000);