import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos : [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo : (state, action) => {
        state.todos.push(action.payload)
        
    },

    updateTodo : (state, action) => {
        
      const findEditTodo = state.todos.find((todo) => todo.id == action.payload.id );

      if(findEditTodo){
        findEditTodo.title = action.payload.title
      }
      
    },

    deleteTodo : (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    }



  },
})

// Action creators are generated for each case reducer function
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer