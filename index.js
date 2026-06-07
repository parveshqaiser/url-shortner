
import express from "express";
import authRoutes from "./src/routes/auth.routes.js";
import urlRoutes from "./src/routes/url.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.status(200).json({message : "Server is up for testing", success: true});
});


app.use("/", authRoutes);
app.use("/", urlRoutes);

app.listen(6700, ()=>{
    console.log("Server is up at port no http://localhost:6700");
});