import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodo = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Cortar tomate', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Reir con el payaso', completed: false }
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodo);
  const [searchValue, setSearchValue] = React.useState('');
  
  //Estados derivados: Son variables, propiedades, calculos a partir de un estado 
  const completedTodo = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodo = todos.length;
  
  function finishedTodo(){
    if (totalTodo === completedTodo) {
  
    }
  }

  const searchTodo = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    }
  );
  
  const completeTodo = (text) => {
    const newTodos = [...todos];//Los tres puntos traen y hacen una copia de un array 
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];//Los tres puntos traen y hacen una copia de un array 
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };


  return (
    <React.Fragment>
      <TodoCounter
        finished={finishedTodo}
        completed={completedTodo}
        total={totalTodo}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchTodo.map(todo => (
          <TodoItem
            key = {todo.text}
            text = {todo.text}
            completed= {todo.completed}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}



export default App;
