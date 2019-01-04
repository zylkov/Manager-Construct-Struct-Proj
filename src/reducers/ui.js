import {CLICK_DIALOG_ADD_PROJ, 
        SET_UI, 
        SET_BUFFER_DIALOG,
        CLEAR_BUFFER_DIALOG,
        CHEAK_DIALOG_DATA,
        CLEAR_ERROR_DIALOG} from '../actions/UiActions'

const initialState = {
    title:"Название",
    backButton:false,
    backButtonLink:"",
    addButton:false,
    openDialogAddProj: false,
    bufferDialog:{},
    errorDialog:{}
}

export function uiReducer(state=initialState, action){
    switch(action.type){
        case CHEAK_DIALOG_DATA:
            return{
                ...state,
                errorDialog: Object.assign({}, state.errorDialog,
                    action.payload.cheaker(state.bufferDialog[action.payload.id]) ? 
                    {[action.payload.id] : action.payload.errorText} : {})
            }
        case CLICK_DIALOG_ADD_PROJ:
            return{
                ...state,
                openDialogAddProj: state.openDialogAddProj ? false : true
            }
        
        case SET_UI:
            return{
                ...state,
                title:action.payload.title,
                backButton:action.payload.backButton,
                backButtonLink:action.payload.backButtonLink,
                addButton:action.payload.addButton

            }
        
        case SET_BUFFER_DIALOG:
            return{
                ...state,
                bufferDialog:Object.assign({},state.bufferDialog,{[action.payload.id]:action.payload.data})
            }
        case CLEAR_ERROR_DIALOG:
            return{
                ...state,
                errorDialog:{}
            }
        case CLEAR_BUFFER_DIALOG:
            return{
                ...state,
                bufferDialog:{}
            }
        default:
            return state
    }
}