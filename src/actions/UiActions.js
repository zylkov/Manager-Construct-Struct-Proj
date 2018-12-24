export const CLICK_DIALOG_ADD_PROJ = "CLICK_DIALOG_ADD_PROJ"

export function clickDialogAddProj(show){
    return dispatch =>{
        dispatch({
            action: CLICK_DIALOG_ADD_PROJ,
            payload: show ? false : true
        })
    }
}