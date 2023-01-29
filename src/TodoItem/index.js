import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props){
	

	const onDelete = () => {
		alert('Borraste el TODO ' + props.text);
	}

    return (
			<li className='TodoItem'>
				<CompleteIcon 
					completed={props.completed}
					onComplete={props.onComplete}
				/>
				<p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
					{props.text}
				</p>
				<DeleteIcon 
					onDelete={props.onDelete}
				/>
			</li>
    );
}

export { TodoItem };