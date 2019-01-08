import React from 'react'
import ReactDOM from 'react-dom'
import PageGallery from './containers/PageGallery'
import PageProject from './containers/PageProject'
import {store} from './store/configureStore'
import {Provider} from 'react-redux'



ReactDOM.render(
    <Provider store={store}>
        <PageProject />
    </Provider>
    , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

