import React, { useState } from 'react';
import'../assets/todoList.css'



const TodoList = () => {

    const [activeItem, setActiveItem] = useState(false)

    return (
        <div className='list-continer'>
            <div className="list-item" onMouseEnter={()=>setActiveItem(true)} onMouseLeave={()=>setActiveItem(false)}>
                <div className='content1'>
                    <div className='square'></div>
                    <div className='check-box'></div>
                    <div className='content2'>
                        <h4 id='task-t'>este es el texto</h4>
                        <h6 id='task-p'>6:54pm 9/11/2001</h6>
                    </div>
                </div>
                {
                    activeItem?
                    <div className="content1">
                        <div className='check-box'></div>
                        <div className='check-box'></div>
                    </div>
                    :
                    null
                }
            </div> 
            <div className="list-item" onMouseEnter={()=>setActiveItem(true)} onMouseLeave={()=>setActiveItem(false)}>
                <div className='content1'>
                    <div className='square'></div>
                    <div className='check-box'></div>
                    <div className='content2'>
                        <h4 id='task-t'>este es el texto</h4>
                        <h6 id='task-p'>6:54pm 9/11/2001</h6>
                    </div>
                </div>
                {
                    activeItem?
                    <div className="content1">
                        <div className='check-box'></div>
                        <div className='check-box'></div>
                    </div>
                    :
                    null
                }
            </div>
    
        </div>
    );
};

export default TodoList;