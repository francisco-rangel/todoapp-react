import React, { useState } from 'react';
import List from './List';
import './styles.css';

const Form = () => {
  const [field, setField] = useState({});
  const [tasks, setTasks] = useState([]);

  const handleChange = event => {
    const {name, value} = event.target;
    setField({...field, [name]: value});
  }

  const handleSumbit = event => {
    event.preventDefault();

    if(Object.keys(field).length == 0 ||
      field.title.trim() && field.description.trim() &&
      field.date.trim() == '') {
      alert("No dejes campos vacíos!");
      return;
    }
    setTasks([...tasks, field]);
    setField({});
  }

  const deleteTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div>
      <div className="row">
        <div className="container">
          <div className="form">
            <form onSubmit={handleSumbit}>
              <input 
                type="text" 
                name="title"
                className="input-form"
                placeholder="Titulo"
                onChange={handleChange}
                value={field.title}/>
              <input 
                type="text"
                name="description"
                className="input-form"
                placeholder="Descripcion"
                onChange={handleChange}
                value={field.description}/>
              <input 
                type="date" 
                name="date"
                className="input-form" 
                onChange={handleChange}
                value={field.date}/>
              <button className="btn-form">Guardar</button>
            </form>
          </div>
        </div>
        <div className="container">
          <List field={tasks} deleteTask={deleteTask}/>
        </div>
      </div>
     
    </div>
  )
}

export default Form