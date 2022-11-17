import React, { useState } from 'react';
// import { Icon } from 'semantic-ui-react';
import'../assets/todoList.css'

const TodoList = ({taskList}) => {

    const [activeItem, setActiveItem] = useState(true)
    // const [star, setStar] = useState(true)


    return (
        <div className='list-continer'>
            {taskList.map((task)=>{
                return(
                    <div key={task.id} className="list-item" style={{borderLeft: `7px solid ${task.color}`}} onMouseEnter={()=>setActiveItem(true)} >
                    <div className='content1'>
                        {/* <Icon name={star?'star outline': 'star'} size='big' onClick={()=>setStar(!star)}/> */}
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

            
    
        </div>
    );
};

export default TodoList;