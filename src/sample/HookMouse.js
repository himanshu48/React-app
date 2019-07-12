import React, {useState,useEffect,useContext} from 'react'

import {UserContext,ChannelContext} from '../App'

function HookMouse() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    const [count, setCount] =useState(0)

    const user =useContext(UserContext)
    const channel =useContext(ChannelContext)

    const logMousePosition = e => {
        console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect");
        window.addEventListener('mousemove',logMousePosition)

        return () =>{
            console.log("Component unmounting code")
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])//empty array means call only once

    useEffect(()=>{ 
        const interval = setInterval(()=>setCount(count+1),1000)
        return ()=>{
            clearInterval(interval)
        }
    },[count])

    return (
        <div>
            <div>{user}-{channel}</div>
            <div><h2>{count}</h2></div>
            Hooks X-{x}  Y-{y}
        </div>
    )
}

export default HookMouse
