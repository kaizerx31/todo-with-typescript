import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EFilters, _toggleTodo } from '../actions';
import { IToDo } from '../Interface/interface';
import { RootState } from '../reducer/reducer';

const TodoList = () => {
  const tasks :IToDo[] = useSelector((state : RootState) => state.todo);
  const filter = useSelector((state : RootState) => state.filter);
  const dispatch = useDispatch();
    return (
        <ul>
          {
              tasks.map(task  =>  {
                   if(filter === EFilters.SHOW_ALL ||
                     (filter === EFilters.SHOW_COMPLETED && task.isCompleted === true) ||
                      (filter === EFilters.SHOW_INCOMPLETE && task.isCompleted === false))
                    return (
                        
                      <li key={task.id} className={task.isCompleted? "completed" : ""} > 
                      
                            <input type = "checkbox" key = {task.id}
                                   checked = {task.isCompleted}
                                   onChange = {() => {
                                   dispatch(_toggleTodo(task.id));
                                    
                                  }}
                            />
                          {task.title} 
                      </li>
                    
                    )
                  else 
                  return null;
                }
             )
           }
        </ul>
     )
 }

export default TodoList;
