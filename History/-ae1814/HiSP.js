const express = require("express");
const port = process.env.PORT || 3001;
const app = express();


app.use(cors())


app.get("/", (req, res) => {
    res.send("Hi");
});

app.post("/api/register", async (req, res) => {
    console.log(req.body.name);
    console.log(req.body.email);
})


app.listen(port, () => {
    console.log(`app running on port ${port}`)
})