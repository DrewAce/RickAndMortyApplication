const axios  = require("axios");
let URL= "https://rickandmortyapi.com/api/character"
axios

async function getApiData (){

try {
    
let characters =[]

for (let i = 0; i < 5; i++) {
   
    const result= await axios(URL)
    const personajes= result.data.results
    characters.push(...personajes)
    URL= result.data.info.next
    
}
console.log("before format");
    const format = characters.map((pj) => {
      console.log(pj);
      return {
        id: pj.id,
        name: pj.name,
        species: pj.species,
        origin: pj.origin.name,
        gender: pj.gender,
        image: pj.image,
        status: pj.status,
      };
    });
    return format

} catch (error) {
    return { error: error.message };
}

}

module.exports = { getApiData };
