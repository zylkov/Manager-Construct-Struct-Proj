import {GET_CARDS_REQUST, 
        GET_CARDS_SUCCESS, 
        GET_CARDS_FAIL} from '../actions/CardsActions'


const initialState = {
    cards:[],
    isLoading: false,
    error:''
}

export function cardsReducer(state=initialState, action){
    switch(action.type){
        case GET_CARDS_REQUST:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        
        case GET_CARDS_SUCCESS:
            return{
                ...state,
                cards: action.payload,
                isLoading: false
            }
        
        case GET_CARDS_FAIL:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state
    }
}