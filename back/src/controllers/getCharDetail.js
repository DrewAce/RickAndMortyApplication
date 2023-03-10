const axios =require("axios")
const URL= "https://rickandmortyapi.com/api/character/";

const getCharDetail = async (req, res) =>{
  const {detailId}= req.params
  if(detailId)
  try {
    const response= await axios(URL+detailId)
    const data = response.data;
    const character = {
          id: data.id,
          image: data.image,
          name: data.name,
          gender: data.gender,
          species: data.species,
          status: data.status,
           origin: data?.origin?.name,
        }
    return res.status(200).json(character)
  } catch (error) {
    return res.status(500).send(error.message)
  }
  else{
    return res.status(500).send("Debes pasarle un id por parámetros")
  }
}

module.exports = {getCharDetail}
  // const axios = require('axios')
  
  
  // const getCharDetail = (res,id)=>{
    //     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    //    .then(response => {
      //         const data = response.data;
      
      //         const character = {
        //           id: data.id,
//           image: data.image,
//           name: data.name,
//           gender: data.gender,
//           species: data.species,
//           status: data.status,
//             origin: data?.origin?.name,
//         }

//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(character));
//       })
//       .catch(error => {
  //         res.writeHead(500, { 'Content-Type': 'text/plain' });
  //         res.end(`El personaje con id: ${id} no fue encontrado. Error: ${error.message}`);
  //       });
  //   };
  // axios(URL+detailId)
  // .then(response =>{
  //   const character = {
  //               id: response.data.id,
  //               image: response.data.image,
  //               name: response.data.name,
  //               gender: response.data.gender,
  //               species: response.data.species,
  //               status: response.data.status,
  //                 origin: response.data?.origin?.name,
  //             }
  //            return res.status(200).json(character)
  // }).catch(error=>{
  //   res.status(500).send(err.message)
  // })
  // }