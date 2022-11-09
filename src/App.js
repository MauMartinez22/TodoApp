import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const[ modal, setModal] = useState(false)

  return (
    <div className="App">
      <h1 id='main-title'>Todo List App</h1>
      <div className="btn-section">
        <button className='btn-prin' onClick={()=>setModal(!modal)}> add task </button>
        <button className='btn-prin' onClick={()=>setModal(!modal)}>all </button>
      </div>
      {modal?
        <Form setModal={setModal}/>
        :
        null
      }
      <TodoList />
      <h3>Clear History</h3>
      
    </div>
  );
}

export default App;
