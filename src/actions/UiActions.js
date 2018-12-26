export const CLICK_DIALOG_ADD_PROJ = "CLICK_DIALOG_ADD_PROJ"
export const SET_UI = "SET_MENU"
export const SET_BUFFER_DIALOG = "SET_BUFFER_DIALOG"
export const CLEAR_BUFFER_DIALOG = "CLEAR_BUFFER_DIALOG"

export function clickDialogAddProj(show){
    return dispatch =>{
        dispatch({
            type: CLICK_DIALOG_ADD_PROJ
        })
    }
}

export function setUi(title,backButton,backButtonLink,addButton){
    return dispatch => {
        dispatch({
            type: SET_UI,
            payload:{
                title,
                backButton,
                backButtonLink,
                addButton
            }
        })
    }
}

export function setBufferDialog(id,data){
    return dispatch => {
        dispatch({
            type: SET_BUFFER_DIALOG,
            payload:{
                id,
                data
            }
        })
    }
}

export function clearBufferDialog(){
    return dispatch =>{
        dispatch({
            type: CLEAR_BUFFER_DIALOG
        })
    }
}