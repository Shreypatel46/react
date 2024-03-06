import {  createSlice, nanoid } from "@reduxjs/toolkit";
// initial state can be anything array , hitesh prefer object 
const initialState ={
    todos:[{id:1 , text: "hello world"}]
}


export const todoSlice =createSlice({
    name:'todo',
    initialState,
    reducers:{
        // defination of methods and we get two access state & action .
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos =state.todos.filter((todo)=>todo.id !== action.payload)
        },

    }
})

export const { addTodo, removeTodo} = todoSlice.actions
// need to export individually (redurers)as need in componets 

export default todoSlice.reducer