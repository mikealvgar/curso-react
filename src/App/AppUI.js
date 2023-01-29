import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { TodosEmpty } from '../TodosEmpty';

function AppUI() {
  const { 
    error, 
    loading, 
    searchTodos, 
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError error={error}/>}
        {loading && <TodosLoading />}
        {(!loading && !searchTodos.length) && <TodosEmpty/>}

        {searchTodos.map(todo => (
          <TodoItem 
            completed={todo.completed} 
            key={todo.text} 
            text={todo.text}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      {!!openModal && (
        <Modal>
          <TodoForm />
      </Modal>
      )}

      <CreateTodoButton 
        setOpenModal = { setOpenModal }
      />
    </React.Fragment>
  );
}

export { AppUI };