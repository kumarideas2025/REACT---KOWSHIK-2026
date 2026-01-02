

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function  MYapp(params) {
  return(
    <>
    
    <h1>can we add our own custom My app there</h1>
    </>
  )
}





createRoot(document.getElementById('root')).render(
   <>    
    <MYapp />
    <App/>

</>
 )





// AS MY APP IS A FUNCTION SO WE CAN EXECUTED THAT LIKE THIS.
// createRoot(document.getElementById('root')).render(
//     MYapp()
//  )









//so basically this element convert to object froms and the frm this obj we find link..
const anotherElement =(
  <a href="https://google.com" target='_blank'>Visit google</a>
)


//  createRoot(document.getElementById('root')).render(
//          anotherElement
//  )














 //so why does not ths object is not executed .cause here when we build custom react we gives types and loop props that is by me so react did n ot recognized that  here. it follow some strict rules.
// const ReactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },

//     children:'Click me to visit google'
// }




const anotherUser="___react time" // use this variable as global ...aslo a evulated expression.




//so we make another element to find a solution
// this time we use react not our own custom react.

import React from 'react'
const reactElement=React.createElement(
  //  all are predefined
   'a',{href:'https://google.com',target:'_blank'},
   'click me visit google',anotherUser

)

// here we use render of react.
import ReactDOM from 'react-dom/client'
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)