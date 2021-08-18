import React from 'react';
import AddToDo from './Component/AddToDo';
import FilterButtons from './Component/FilterButtons';
import Header from './Component/Header';
import TodoList from './Component/TodoList';


const App = () => {
  return (
    <div className="App">
         <div className="container">
            <Header />
        </div>

            <div className="todo-app">
              <AddToDo  />
              <FilterButtons />
              <TodoList  />
           </div>
     </div>
  );
}

export default App;
