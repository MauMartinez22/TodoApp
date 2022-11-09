import React, { useState } from 'react';
import'../assets/todoList.css'

const TodoList = () => {

    const [counter, setCounter]= useState(1)

    const tasks = [counter]
    console.log(counter)

    return (
        <div className='list-continer'>
            {
                tasks.map(tasks=>{
                    return(
                        <div key={counter} className="list-item">
                        </div>
                    )
                })
            }
            <div className="list-item">
            </div>
            <button onClick={()=>setCounter(counter +1)}> mas</button>
            <button onClick={()=>setCounter(counter -1)}> menos</button>
        </div>
    );
};

export default TodoList;