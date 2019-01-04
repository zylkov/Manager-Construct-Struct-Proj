import {combineReducers} from 'redux'

import {uiReducer} from './ui'
import {cardsReducer} from './cards'
import {projectReducer} from './project'

export const rootReducer = combineReducers({
    ui:uiReducer,
    cards:cardsReducer,
    project: projectReducer
})