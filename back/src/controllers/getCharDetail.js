const axios = require('axios')


const getCharDetail = (res,id)=>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
   .then(response => {
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
  
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(character));
      })
      .catch(error => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`El personaje con id: ${id} no fue encontrado. Error: ${error.message}`);
      });
  };


module.exports = getCharDetail

