import { useState } from "react"

function Counter(){
    const [count,setCount]=useState(0)
    return <>
    Count:{count}
    {/* <button onClick={()=>{count = count+1}}>+</button> */}
    <button onClick={()=>setCount(count+1)}>+</button>
    <button onClick={()=>setCount(count-1)}>-</button>
    <button onClick={()=>setCount(0)}>reset</button>
    </>
}
export default Counter