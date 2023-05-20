const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/sahithChannel2", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connect") })
    .catch((err) => { console.log(err) })


// schema
const playListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const PlayList = new mongoose.model("PlayList", playListSchema)

const createDocument = async () => {

    try {
        const reactPlayList = new PlayList({
            name: "React Js",
            ctype: "Front End",
            videos: 80,
            author: "Sahith",
            active: true,

        })

        const result = await reactPlayList.save()
        console.log(result)
        console.log("asljdf")

    } catch (error) {
    console.log(error)
    }
}