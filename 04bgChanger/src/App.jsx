import { useState } from "react"

function App() {

  let [color, setColor] = useState("green")

  return (

    <div className="w-full h-dvh " style={{backgroundColor : color}}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-2 bg-white rounded-3xl">
          <button onClick={()=> setColor("Red")} className="outline-none px-4 py-1 rounded-3xl mx-1" style={{background: "red"}} >Red</button>
          <button onClick={()=> setColor("blue")} className="outline-none px-4 py-1 rounded-3xl mx-1" style={{background: "blue"}} >Blue</button>
          <button onClick={()=> setColor("green")} className="outline-none px-4 py-1 rounded-3xl mx-1" style={{background: "green"}} >Green</button>
          <button onClick={()=> setColor("lavender")} className="outline-none px-4 py-1 rounded-3xl mx-1" style={{background: "lavender"}} >Lavender</button>
          {/* <button onClick={()=> setColor("Red")} className="outline-none px-4 py-1 rounded-3xl mx-1" style={{background: "red"}} >Grey</button>
          <button onClick={()=> setColor("Red")} className="outline-none px-4 py-1 rounded-3xl mx-1" style={{background: "red"}} >Pink</button>
          <button onClick={()=> setColor("Red")} className="outline-none px-4 py-1 rounded-3xl mx-1" style={{background: "red"}} >Black</button>
          <button onClick={()=> setColor("Red")} className="outline-none px-4 py-1 rounded-3xl mx-1" style={{background: "red"}} >White</button> */}
        </div>
      </div>
    </div>

  )
}

export default App
