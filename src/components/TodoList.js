import React, { useState } from 'react';
import'../assets/todoList.css'

const TodoList = () => {

    const [activeItem, setActiveItem] = useState(true)
    const [classLoved, setClassLoved] = useState(true)

    const lista = [{name:"Main Title", date:"14/11/22" , id:1},{name:"Main Title 2 ", date:"14/11/22" , id:2},{name:"Main Title 3 ", date:"14/11/22" , id:3}]

    return (
        <div className='list-continer'>
            {lista.map((task)=>{
                return(
                    <div key={task.id} className="list-item" onMouseEnter={()=>setActiveItem(true)} >
                    <div className='content1'>
                        <a  className={classLoved? "heart-shape": "heart-shape-loved"} onClick={()=>setClassLoved(!classLoved)}></a>
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
            {/* <div className="list-item" onMouseEnter={()=>setActiveItem(true)} onMouseLeave={()=>setActiveItem(false)}>
                <div className='content1'>
                    <a  className={classLoved? "heart-shape": "heart-shape-loved"} onClick={()=>this.setClassLoved(!classLoved)}></a>
                    <div className='check-box'></div>
                    <div className='content2'>
                        <h4 id='task-t'>este es el texto</h4>
                        <h6 id='task-p'>6:54pm 9/11/2001</h6>
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
            </div> */}
    
        </div>
    );
};

export default TodoList;