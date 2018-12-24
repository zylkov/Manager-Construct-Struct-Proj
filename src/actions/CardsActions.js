import {v4} from 'uuid'

export const GET_CARDS_REQUST = "GET_CARDS_REQUST"
export const GET_CARDS_SUCCESS = "GET_CARDS_SUCCESS"
export const GET_CARDS_FAIL = "GET_CARDS_FAIL"

export const ADD_CARD_REQUST = "ADD_CARD_REQUST"
export const ADD_CARD_SUCCESS = "ADD_CARD_SUCCESS"
export const ADD_CARD_FAIL = "ADD_CARD_FAIL"



export function getCards(){
    return dispatch =>{
        dispatch({
            type: GET_CARDS_REQUST
        })

        setTimeout(()=>{
            dispatch({
                type: GET_CARDS_SUCCESS,
                payload:[
                    {
                        id:1,
                        name:"Проект 1",
                        discription:"Вообще кул проект отвечаю"
                      },
                      {
                        id:2,
                        name:"Проект 2",
                        discription:"Да нет вот этот самый наилудщий"
                      },
                      {
                        id:3,
                        name:"Проект 3",
                        discription:"В кратце - круть"
                      }
                ]
            })
        }, 1000)
    }
}

export function addCard(name,discription){
    return dispatch =>{
        dispatch({
            type: ADD_CARD_REQUST
        })

        setTimeout(()=>{
            dispatch({
                type: ADD_CARD_SUCCESS,
                payload:{
                    id:v4(),
                    name,
                    discription
                }
            })
        }, 1000)
    }
}