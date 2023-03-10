import { ADD_FAVORITE, ALL_CHARACTERS, DELETE_FAVORITE, FILTER, ORDER, GET_FAVORITES } from "./actions"

const initialState = {
    myFavorites: [],
    allCharacters: [],
    errors: {}
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE: 
        return {
            ...state,
            myFavorites:action.payload,
            allCharacters:action.payload,
            errors:{},
        }
        case DELETE_FAVORITE:
        return {
            myFavorites: action.payload,
            errors:{},
        }
        case FILTER:
        const { allCharacters } = state
        const allCharactersFilter = allCharacters.filter(element => element.gender === action.payload)
        return {
            ...state,
            myFavorites: allCharactersFilter
        }
        case ORDER:
            if(action.payload === "Ascendente"){
                return {
                ...state, 
                myFavorites:[...state.myFavorites.sort((a , b) => a.id - b.id)]
                }
              }
              if(action.payload === 'Descendente'){
              return {
                ...state,
                myFavorites: [...state.myFavorites.sort((a , b) => b.id - a.id)]
              }}
        case ALL_CHARACTERS:
            return {
                ...state,
                myFavorites: state.allCharacters.length !== 0 && state.allCharacters
            }
        case "ERROR":
            return{
                ...state,
                errors: action.payload,
        }    
        case GET_FAVORITES:
                return{
              ...state,
              myFavorites: action.payload,
              errors:{},
            }

        default: return {...state}
    }
}

export default reducer