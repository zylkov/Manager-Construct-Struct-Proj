export const GET_PROJECT_REQUST = "GET_PROJECT_REQUST"
export const GET_PROJECT_SUCCESS = "GET_PROJECT_SUCCESS"
export const GET_PROJECT_FAIL = "GET_PROJECT_FAIL"

export function getCards(){
    return dispatch =>{
        dispatch({
            type: GET_PROJECT_REQUST
        })

        setTimeout(()=>{
            dispatch({
                type: GET_PROJECT_SUCCESS,
                payload:{
                    name:"Проект 1",
                    discription:"Информационная система предназначенна для создание архитиктуры проектов и автоматизации этапа проектирования"
                }
            })
        }, 1000)
    }
}