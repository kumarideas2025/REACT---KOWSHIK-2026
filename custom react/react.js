
// in our normal html how itis looks...customRender.
// <a href="https://google.com" target="_blank">
//   Click me to visit google
// </a>



//but we can  not directly run it inn browser ..so convert it into React jsx.
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },

    children:'Click me to visit google'
}






function customRender(reactElement,container){
    /*
    const domElement=document.createElement(reactElement.type)// create through react element(basically this will for'a') and will suitable cjhange this tag so that we can use it in browser.. this called modular element.
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

   container.appendChild(domElement) // inject that our domElement into mainContainer(basically add it into root)
   */


   //this is loop version so we did not needed to setattribute everytime
  const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop  in reactElement.props) {
        if (prop === 'children') continue; // variable should not be string.
        

        domElement.setAttribute(prop,reactElement.props[prop])
          
    }

  container.appendChild(domElement)

}










const mainContainer=document.querySelector('#root')



customRender(reactElement,mainContainer) // we attach that element with root.