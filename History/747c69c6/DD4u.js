const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();

mongoose.conncect("mongodb+srv://kumarbharat99928:lisa@&90@unqgamerop.w6waifp.mongodb.net/?retryWrites=true&w=majority");
app.get("/", (req, res)=>{
    res.sendFile(path.join( __dirname , "client/fake.html"))
});

app.listen(port, ()=>{
    console.log(`app running on port `,port)
})