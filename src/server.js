import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddelWare = (req,res,next) => {
    console.log(`Someone is going to :${req.url}`);
    next();
}
const handleHome = (req,res) => {
    return res.send("I love hyeok");
};
const handleLogin = (req,res) => {
    return res.send("Login Page");
}

app.use(gossipMiddelWare);
app.get("/", handleHome);

app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`));