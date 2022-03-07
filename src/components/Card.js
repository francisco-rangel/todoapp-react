import React from 'react'

const Card = ({ field, index, deleteTask }) => {
	return (
		<div className="card">
			<div className="container">
				<h2>{field.title}</h2>
				<p>{field.description}</p>
				<p>Fecha: {field.date}</p>
				<button 
				className="btn-delete"
				onClick={() => deleteTask(index)}>
					Eliminar
				</button>
			</div>
		</div>
	)
}

export default Card