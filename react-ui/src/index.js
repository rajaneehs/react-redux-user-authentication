import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

import { setUser } from './redux/userActions'
import axios from 'axios'

store.subscribe(() => {
  console.log(store.getState())
})

// user reloaded page
if(localStorage.getItem('userAuthToken')){
  axios.get(`http://localhost:3002/users/account`,{
    headers: {
      'x-auth': localStorage.getItem('userAuthToken')
    }
  })
  .then(response => {
    store.dispatch(setUser(response.data))
  })
}

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
