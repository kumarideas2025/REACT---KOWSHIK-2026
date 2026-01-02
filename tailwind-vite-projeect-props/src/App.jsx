import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// we can takes cards info from card 
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0);
    let myObj={
      UserName:"Kowshik",
      Age:22
    }

    let NewArray=[22,77,88]

  return (
    <>
    <h1 className='bg-red-50 text-green p-4 rounded-xl'>learn_tailwind_css_with react_props</h1>

{/* 
    Props in React are JavaScript objects passed from parent to child.
 The structure is always key={value}, where key is the prop name and value is the data (string, object, array, etc.). */}

     <Card channel="Learn react props with tailwind and Kowshik " TryObj={myObj} ArrayTime={NewArray} btnText="visit me" />



           {/* here we can add one card in multiple times */}
          <Card User="Kowshik_sarker"   btnText="click me"/>
          {/* Card get different information from many where.and all this done by props */}

    </>
  );
}

export default App;
