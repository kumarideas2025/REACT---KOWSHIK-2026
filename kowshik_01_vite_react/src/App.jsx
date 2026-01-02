import Coffee from "./cofee"
function App() {
 

 const username="react with kowshik" 
  return (



    //  <h1>this time we work with vite . so we saw there jsx instead of js ..means  we got frame_work instead of library</h1>
    // why we comment out upper part cause [jsx told us we can end tag with </>. and we can  only export one tag only and only return that one tag]
    // so here solution can be using div.. where we can write ....
    // OR  WE CAN RETURN USING EMPTY <> </>...THIS CALLED FRAGMENT IN JS.



  <>
    <Coffee />
  <h1>so look how we use div to add more tags</h1>
  <h5>WE CALLED EMPTY TAG AS FRAGMENT THERE </h5>

  {/* like we use backtics in js ..we get username from that. */}
  <h1>learn from {username}</h1>


  </>


   )
}

export default App


//{username }  called evulate  expression..here js show final output of js 