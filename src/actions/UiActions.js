export const CLICK_DIALOG_ADD_PROJ = "CLICK_DIALOG_ADD_PROJ"
export const SET_UI = "SET_MENU"
export const SET_BUFFER_DIALOG = "SET_BUFFER_DIALOG"
export const CLEAR_BUFFER_DIALOG = "CLEAR_BUFFER_DIALOG"
export const CHEAK_DIALOG_DATA = "CHEAK_DIALOG_DATA"
export const CLEAR_ERROR_DIALOG = "CLEAR_ERROR_DIALOG"
export const CHANGE_TABS="CHANGE_TABS"
export const SET_ADD_BUTTON = "SET_ADD_BUTTON"

export function setAddButton(seted){
    return dispatch => {
        dispatch({
            type: SET_ADD_BUTTON,
            payload:{
                addButton:seted
            }
        })
    }
}

export function changeTabs(valueTab){
    return dispatch =>{
        dispatch({
            type: CHANGE_TABS,
            payload:{
                valueActiveTab:valueTab
            }
        })
    }
}

export function clearErrorDialog(){
    return dispatch =>{
        dispatch({
            type: CLEAR_ERROR_DIALOG
        })
    }
}

export function cheackDialogData(idData,funcheacker, errorText){
    return dispatch =>{
        dispatch({
            type: CHEAK_DIALOG_DATA,
            payload:{
                id:idData,
                cheaker: funcheacker,
                errorText
            }
        })
    }
}

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