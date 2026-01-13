import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store'

// react-dom connects React components to the real browser DOM (like putting food on a plate)
// createRoot selects the HTML div where the React app will render (the plate itself)

// Provider acts like a pipeline connecting the water tank (Redux store) to taps (components)
// Now any component can "tap" into the store using useSelector or useDispatch


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)




// Redux Store
//      │
//      ▼
//  Provider (wraps App)
//      │
//      ▼
// Components → useSelector/useDispatch
// with out provider it gives error.cause no component knows any store..
