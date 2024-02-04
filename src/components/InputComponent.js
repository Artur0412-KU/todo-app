import React, { useEffect, useState, useForm } from 'react';
import ListItem from './ListItem';
import {Button, Form, Input} from 'antd';
import ButtonComponent from './Button/ButtonComponent';
import SubmitButton from './Button/SubmitButton';

export default function InputComponent() {
  const [input, setInput] = useState('');
  const [item, setItem] = useState([]);
  const [form] = Form.useForm();

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
      <Form form={form} name='trigger' className='App-input-container__input' autoComplete="off">

      <div className='App-input-container__input-top'>
        <Form.Item
         hasFeedback
         name="input"
         
         rules={[
          {
            required: true,
            message: 'Please input your ToDo!',
          },
          {
            min: 3,
            message: 'Minimum 3 characters required!',
          },
          {
            max: 100,
            message: 'Maximum 100 characters allowed!',
          }
         ]}
      >
          <Input style={{padding: ' 10px', width:'50vh'}}
          value={input}
          placeholder={item.length > 0 ? 'Add another todo' : 'Add new todo'}
          onChange={changeHandler}
          onKeyDown={() =>handleButtonDown}
          />
        </Form.Item>

        <Form.Item>
          <SubmitButton form={form} item={item} input={input} setItem={setItem} />
        </Form.Item>
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
        
        
      </Form>
      <ButtonComponent className = 'App-input-container__input-bottom-button-components-clear' text = 'Clear' onClick = {() => clearAllTasks()}/>
    </div>
  );
}

