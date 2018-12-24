import {CLICK_DIALOG_ADD_PROJ} from '../actions/UiActions'

const initialState = {
    openDialogAddProj: false
}

export function uiReducer(state=initialState, action){
    switch(action.type){
        case CLICK_DIALOG_ADD_PROJ:
            return{
                ...state,
                openDialogAddProj: action.payload
            }

        default:
            return state
    }
}