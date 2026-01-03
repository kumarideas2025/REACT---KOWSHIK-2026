import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './LAyout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact_us/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'





//-----------------------one way of routing----------------------

// with this BrowserRouter i control all the page routing
// const router= createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>, // this to provide the the layout structure from my LAyout file.
//     children:[{
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"about",
//       element:<About/> 

//     },
//     {
//       path:"contact",
//       element:<Contact/> 

//     }
//   ]
//   }
// ])







//--------------------another easily way of routing----------------------
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/> 
      <Route 
      loader=  {
        githubInfoLoader // it gives more optimize than those traditional api...calls
      }              // with loader i can directly call api..
      path='github'
       element={<Github/>}/> 

    </Route>

  )
)








createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}/>
   </StrictMode>,
)
