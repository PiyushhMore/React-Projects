// import { createSlice, nanoid } from "@reduxjs/toolkit";

// // INITIAL STAGE IN THE STORE
// const initialState = {
//     todos : [{id : 1, text : "Hello"}]
// }

// // CREATE SLICE i.e THE BIG VERSION OF THE REDUCER
// export const todoSlice = createSlice({
//     name : todoSlice,
//     initialState,
//     reducers : {
//         addTodo : (state, action) => {
//             const todo = {
//                 id : nanoid(),
//                 text : action.payload.text
//             }
//             state.todos.push(todo)
//         },
//         removeTodo : (state, action) => {
//             state.todos = state.todos.filter((todo) => todo.id !== action.payload.id) 
//         },
//     }
// })

// export const {addTodo, removeTodo} = todoSlice.actions


// export default todoSlice.reducer


import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer