import {combineReducers} from 'redux'

import {uiReducer} from './ui'
import {cardsReducer} from './cards'

export const rootReducer = combineReducers({
    ui:uiReducer,
    cards:cardsReducer
})