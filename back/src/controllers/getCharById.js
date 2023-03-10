const axios = require('axios');

const URL= "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res){
   const {id} =req.params

try {
  
  const response= await axios(URL+id)
  
  const character = {
              id: response.data.id,
              image: response.data.image,
              name: response.data.name,
              gender: response.data.gender,
              species: response.data.species
            }
            return res.status(200).json(character)
} catch (error) {
 return res.status(500).send(err.message);
  
}


}


   
   module.exports = {getCharById}
   // const getCharById = (res,id)=>{
     
     //     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
     //     .then(response => {
       //         const data = response.data;
       
       //         const character = {
         //           id: data.id,
         //  axios(URL+id)
         //  .then(response =>{
         //            return res.status(200).json(character)
         // }).catch(error=>{
         //   res.status(500).send(err.message)
         // })
         // }
//           image: data.image,
//           name: data.name,
//           gender: data.gender,
//           species: data.species
//         }
  
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(character));
//       })
//       .catch(error => {
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.end(`El personaje con id: ${id} no fue encontrado. Error: ${error.message}`);
//       });
//   };
