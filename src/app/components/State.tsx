"use client"
import {useState} from "react"

function State(){
    const [count , setCount] = useState(0)
    return(
        <div>
            <p className="pt-7 ">My Count is: {count} </p>
             <button onClick={() => setCount(count + 100) } className="bg-black text-white py-7 px-10 rounded-md"> Increment </button>
            <button onClick={() => setCount(0)}>Reset</button>
            
        </div>
    )
}
export default State