import {createSlice} from '@reduxjs/toolkit'

export const todoslice = createSlice({
    name:"Todo",
    initialState:[],
    reducers:{
        addTodo:(state,action) =>{
            state.push({id:Date.now(),text:action.payload})
        },
        deleteTask:(state,action) => {
            return state.filter(todo => todo.id !== action.payload)
        },
        editTask:(state,action) =>{
            const {id, newText} = action.payload;
            const todo = state.find(todo => todo.id === id)

            if(todo){
                todo.text = newText
            }
        }
    }
})

export const {addTodo,editTask,deleteTask}= todoslice.actions

export default todoslice.reducer;