const express= require("express")
const server= express()
const PORT= 3001;
const cors= require("cors")
const router= require("./routes/index")
const favsRouter= require("./routes/favsRouter")
const { sequelize } = require("./database/index");

server.use(cors())
server.use(express.json())
server.use("/rickandmorty", router)
server.use("/favs", favsRouter)


server.listen(PORT,  ()=> {
  sequelize.sync({ force: true });
  console.log("Server raised in port " + PORT + ", and DB SYNC");
})


// const http = require("http");
// const getCharById =require('./controllers/getCharById')
// const getCharDetail =require('./controllers/getCharDetail')
// // const characters = require("./utils/data.js");

// http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   let id= req.url.split('/').at(-1) 

//   if(req.url.includes("onsearch")){
//    getCharById(res,id)
//   }

//   if(req.url.includes("detail")){
    
//    getCharDetail(res,id)
//   }

// }).listen(3001, "localhost", () => {
//   console.log("Server running at http://localhost:3001");
// });


//Otros códigos
  // if (req.url.includes("rickandmorty/character")) {
  //   let id = req.url.split("/").at(-1);
  //   let characterFilter = characters.filter(char => char.id === Number(id))

  //   if (characterFilter.length > 0) {
  //     res.writeHead(200, { "Content-type": "application/json" });
  //     res.end(JSON.stringify(characterFilter[0]));
  //   } else {
  //     res.writeHead(404, { "Content-type": "application/json" });
  //     res.end(JSON.stringify({ message: "Character not found" }));
  //   }
  // } else if (req.url === "/rickandmorty/characters") {
  //   res.writeHead(200, { "Content-type": "application/json" });
  //   res.end(JSON.stringify(characters));
  // } else {
  //   res.writeHead(404, { "Content-type": "application/json" });
  //   res.end(JSON.stringify({ message: "Route not found" }));
  // }