import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import'../assets/todoList.css'

const TodoList = () => {

    const [activeItem, setActiveItem] = useState(true)
    const [star, setStar] = useState(true)
    const [counter , setCounter] = useState(4)

    const lista = [{name:"Main Title", date:"14/11/22" , id:1},{name:"Main Title 2 ", date:"14/11/22" , id:2},{name:"Main Title 3 ", date:"14/11/22" , id:3}]

    const add =()=>{
        lista.push({name: "main tile", date:"14/11/22", id:7})
        setCounter(counter+1)
        
    }
    console.log(lista)

    return (
        <div className='list-continer'>
            {lista.map((task)=>{
                return(
                    <div key={task.id} className="list-item" onMouseEnter={()=>setActiveItem(true)} >
                    <div className='content1'>
                        <Icon name={star?'star outline': 'star'} size='big' onClick={()=>setStar(!star)}/>
                        <div className='check-box'></div>
                        <div className='content2'>
                            <h4 id='task-t'>{task.name}</h4>
                            <h6 id='task-p'>{task.date}</h6>
                        </div>
                    </div>
                    {
                        activeItem?
                        <div className="content1">
                            <div className='edit-box'>
                            <span class="material-symbols-outlined">
                                edit
                            </span>
                            </div>
                            <div className='delet-box'>
                            <span class="material-symbols-outlined">
                                delete
                            </span>
                            </div>
                        </div>
                        :
                        null
                    }
                </div> 
                )
            })}

            <button onClick={add}>add</button>
    
        </div>
    );
};

export default TodoList;