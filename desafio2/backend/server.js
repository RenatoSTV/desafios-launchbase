const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/28743243?s=460&u=f31b220b19d908d55bc55de49ddbf279ddc78353&v=4",
        name:"Renato Teofilo",
        role: "Web Development Student",
        description:'Web Development student at <a href="https://rocketseat.com.br" target="blank">Rocketseat</a>, ready to learn!',
        links: [
            { name: "Github", url: "https://github.com/RenatoSTV"},
            { name: "Twitter", url: "https://twitter.com/renatostv1"},
            { name: "Linkedin", url: "https://www.linkedin.com/in/renatoteofilo/"}
        ]
    }

    return res.render("about", {about})
})

server.get("/portifolio", function(req, res){

    return res.render("portifolio", {items: videos})
})

server.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if (!video){
        return res.send("Video not found!")
    }


    return res.render("video", { item: video })
})

server.listen(5000, function(){
    console.log("server is running")
})