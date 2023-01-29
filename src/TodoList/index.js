import React from 'react';
import './TodoList.css';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Ser feliz al otro día', completed: false }
];

function TodoList(props) {
  return (
		<section className='TodoList'>
				<ul>
					{props.children}
				</ul>
		</section>
  );
}

export { TodoList };