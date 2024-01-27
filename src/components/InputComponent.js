import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import ButtonComponent from './ButtonComponent';

export default function InputComponent() {
  const [input, setInput] = useState('');
  const [item, setItem] = useState([]);

  useEffect(() => {
    setInput('');
  }, [item]);

  const changeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  }

  const addNewTodo = () => {
    const updatedElement = { id: item.length + 1, name: input, completed: false };
    setItem([...item, updatedElement]);
  }

  const handleDelete = (id) => {
    const filteredItems = item.filter(item => item.id !== id);
    setItem(filteredItems);
  }

  const toggleCompleted = (id) => {
    const updatedItems = item.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItem(updatedItems);
  }

  const handleButtonDown = (e) => {
    if (e.key === 'Enter') {
      addNewTodo();
    }
  }

  const clearAllTasks = () => {
    setItem([]);
  }

  const completedCount = item.filter(item => item.completed).length;

  return (
    <div className='App-input-container'>
      <h3 className='App-input-container__title'>Completed tasks: {completedCount}</h3>
      <div className='App-input-container__input'>
      <div className='App-input-container__input-top'>
        <input className='App-input-container__input--input-field'
          value={input}
          placeholder={item.length > 0 ? 'Add another todo' : 'Add new todo'}
          onChange={changeHandler}
          onKeyDown={handleButtonDown}
        />
        <button onClick={addNewTodo}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
	<path fill="white" d="M15.5 6H10V.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V6H.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H6v5.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V10h5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5" />
</svg>
        </button>
      </div>
        
      <div className='App-input-container__input-bottom'>
        <ul>
          {item.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              name={item.name}
              completed={item.completed}
              style={{ color: item.completed ? 'green' : 'black' }}
            >
                <div className='App-input-container__input-bottom-button-components'>
                   <ButtonComponent className = 'App-input-container__input-bottom-button-components-delete' text='Delete' onClick={() => handleDelete(item.id)} />
                  <ButtonComponent className = 'App-input-container__input-bottom-button-components-completed' text='Completed' onClick={() => toggleCompleted(item.id)} /> 
                </div>
              
            </ListItem>
          ))}
        </ul>
      </div>
        
        
      </div>
      <ButtonComponent className = 'App-input-container__input-bottom-button-components-clear' text = 'Clear' onClick = {() => clearAllTasks()}/>
    </div>
  );
}

