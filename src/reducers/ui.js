import {CLICK_DIALOG_ADD_PROJ, SET_UI} from '../actions/UiActions'

const initialState = {
    title:"Название",
    backButton:false,
    backButtonLink:"",
    addButton:false,
    openDialogAddProj: false
}

export function uiReducer(state=initialState, action){
    switch(action.type){
        case CLICK_DIALOG_ADD_PROJ:
            return{
                ...state,
                openDialogAddProj: action.payload
            }
        
        case SET_UI:
            return{
                ...state,
                title:action.payload.title,
                backButton:action.payload.backButton,
                backButtonLink:action.payload.backButtonLink,
                addButton:action.payload.addButton

            }
        default:
            return state
    }
}