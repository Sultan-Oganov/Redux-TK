import { createSlice } from "@reduxjs/toolkit";

export const toolkitslice = createSlice({
    name: "toolkit", 
    initialState: {
        count: 0,
        todos: [{name: 'abc', id: 0}, {name: 'def', id: 1}, {name: 'ghi', id: 2}, {name: 'jkl', id: 3}, {name: 'mno', id: 4},]
    },
    reducers: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        },
        addTodo: (state, action) => {
            state.todos.push({id: state.todos.length + 1, name: action.payload});
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(({id}) => id !== action.payload);
        }
    }
});

export default toolkitslice.reducer;
export const {increment, decrement, addTodo, removeTodo} = toolkitslice.actions;
