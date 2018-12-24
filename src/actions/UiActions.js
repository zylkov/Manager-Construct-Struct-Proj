export const CLICK_DIALOG_ADD_PROJ = "CLICK_DIALOG_ADD_PROJ"
export const SET_UI = "SET_MENU"

export function clickDialogAddProj(show){
    return dispatch =>{
        dispatch({
            type: CLICK_DIALOG_ADD_PROJ,
            payload: show ? false : true
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