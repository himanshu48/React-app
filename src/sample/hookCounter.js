import React, { useState,useEffect } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState({ firstName: '', lastName: '' })
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    useEffect(()=>{
        console.log("useEffect")
        document.title = `You clicked ${count} times`

    },[count])//instead of count you can pass either props or state which has to watch, useEffect will get executed wheb there is a change.
    return (
        <div>
            count: {count}
            <br/>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <br/><hr/><br/>
            <form>
                <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
                <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
                <br/>{name.firstName}{name.lastName}
                <br/>{JSON.stringify(name)}
            </form><br/><hr/><br/>
            <button onClick={addItem}>Add number</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookCounter
