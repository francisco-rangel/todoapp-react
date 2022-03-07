import React from 'react'
import Card from './Card';

const List = ({ field, deleteTask }) => {
  return (
    <div className="list">
      {
        field.length == 0 ? <h2>Sin tareas!</h2> :
        field.map((f, i) => (
          <Card key={i} field={f} index={i} deleteTask={deleteTask}/>
        ))
      }
    </div>
  )
}

export default List