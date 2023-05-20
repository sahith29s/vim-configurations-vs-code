const express = require("express");
port = process.env.PORT || 3000;
const app = express();
const router = require("./routes/route")

// middleware 
app.use("/", router)



app.listen(port, () => {
    console.log(`app running on port ${port}`)
})