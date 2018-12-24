export const GET_CARDS_REQUST = "GET_CARDS_REQUST"
export const GET_CARDS_SUCCESS = "GET_CARDS_SUCCESS"
export const GET_CARDS_FAIL = "GET_CARDS_FAIL"

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