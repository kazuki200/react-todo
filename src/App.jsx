import { useState } from "react";
import "./styles.css"

import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {

  const [todoText,setTodoText] = useState('');

  const [incomplteTodos,setIncompleteTodos] = useState([])

  const [completeTdos, setCompleteTodos] = useState([])

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () =>{
    if (todoText === "" ) return;
    const newTodos = [...incomplteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClikcDelete = (index) => {
    const newTodos = [...incomplteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClikcComplete = (index) => {
    const newIncompleteTodos = [...incomplteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTdos,incomplteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTdos];
    newCompleteTodos.splice(index,1);

    const newIncompleteTodos = [...incomplteTodos, completeTdos[index]]
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
    }

  return (
  <>

  <InputTodo 
  todoText={todoText}
   onChange={onChangeTodoText}
    onClick={onClickAdd} 
    disabled={incomplteTodos.length >= 5}
    />
    {incomplteTodos.length >= 5 && <p style={{color:'red'}}>登録できるtodo５個までだよー、消化しろ</p>
}
    
  <div>
    <IncompleteTodos
     todos={incomplteTodos}
      onClikcComplete={onClikcComplete}
       onClikcDelete={onClikcDelete} 
       />
  
    <CompleteTodos 
    completeTdos={completeTdos} 
    onClickBack={onClickBack} 
    />

  </div>
  <div></div>
  </>
  );
};