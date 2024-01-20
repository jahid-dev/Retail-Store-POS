import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Router/MainRouter'
import { createStore, combineReducers } from 'redux'
import { rootReducer } from './redux/rootReducer'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'

const finalReducer = combineReducers({
  rootReducer: rootReducer
})

const initialState = {
  rootReducer: {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
  }
}

const store = createStore(finalReducer, initialState)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)

reportWebVitals();
