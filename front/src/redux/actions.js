import axios from "axios"
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const ALL_CHARACTERS = 'ALL_CHARACTERS';
export const GET_FAVORITES= 'GET_FAVORITES'



export const addFavorite =  (character) => {
  
    return async function (dispatch){
     try {
         const backResponse= await axios.post("http://localhost:3001/favs/create", character)
 
         return dispatch({
             type: ADD_FAVORITE,
             payload: backResponse.data,
 
         })
        
     } catch (error) {
        return dispatch({type: "ERROR", payload:error})
     }


    }



    // return function(dispatch){
    //     axios.post("http://localhost:3001/favs/create", character).then((response)=>{
            
    //         return dispatch ({type: ADD_FAVORITE, payload: response.data})
    //     })
    //     }
    }


export const deleteFavorite = (id) => {
    return async function(dispatch){
        try {
            const backResponse= await axios.delete("http://localhost:3001/favs/delete/"+id)
            return dispatch({
                type: DELETE_FAVORITE,
                payload: backResponse.data
            })
            
        } catch (error) {
            return dispatch({type: "ERROR", payload:error})
        }



        // axios.delete("http://localhost:3001/favs/delete/"+id).then((response)=>{
            
        //     return dispatch({type: DELETE_FAVORITE, payload: response.data})
           
        // })
        }
    }


export const filterCards = (status) => {
    return {type:FILTER, payload: status}
}

export const orderCards = (id) => {
    return{type: ORDER, payload: id}
}

export const getFavorite=()=>{
return async function(dispatch){
    try {
        
        const backResponse= await axios ("http://localhost:3001/favs/get")
        return dispatch({type: GET_FAVORITES, payload:backResponse.data})
    } catch (error) {
        return dispatch({type: "ERROR", payload:error}) 
    }
}
}

export const allCharacters = () => {
    return {type: ALL_CHARACTERS}
}