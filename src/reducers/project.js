import {GET_PROJECT_REQUST,
        GET_PROJECT_SUCCESS,
        GET_PROJECT_FAIL} from '../actions/ProjectActions'

const initialState = {
    name:"Неизвестно",
    discription:"нет",
    dateСreat:"-",
    isLoading: false,
    subproject:[],
    error:''
}

export function projectReducer(state=initialState, action){
    switch(action.type){
        case GET_PROJECT_REQUST:
            return{
                ...state,
                error:"",
                isLoading:true
            }
        case GET_PROJECT_SUCCESS:
            return{
                ...state,
                error:"",
                isLoading:false,
                name: action.payload.name,
                discription: action.payload.discription,
                dateСreat: action.payload.dateСreat
            }
        default:
            return state
    }
}