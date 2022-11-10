import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import arrow from'./assets/images/angulo-pequeno-hacia-abajo.png'

function App() {

  const[ modal, setModal] = useState(false)

  return (
    <div className="App">
      <h1 id='main-title'>Todo List</h1>
      <div className="btn-section">
        <button className='btn-prin' onClick={()=>setModal(!modal)}>Add task </button>
        <button className='btn-prin'>All <img src={arrow} className="arrow-selection"  /> </button>
      </div>
      {modal?
        <Form setModal={setModal}/>
        :
        null
      }
      <TodoList />
      <h3 id='footer-t'>Clear History</h3>
      
    </div>
  );
}

export default App;
