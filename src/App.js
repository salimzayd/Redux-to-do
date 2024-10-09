import React, { useState } from "react";
import {Button, Container, IconButton, List, ListItem, ListItemText, TextField, Typography} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const App = () =>{
  
  const [todo,setTodo] = useState('')
  const [edit,setEdit] = useState(false)
  const [todos,setTodos] = useState([])
  const [currenttodo,setCurrenttodo] = useState(null)
  const [search,setSearch] = useState('')


  const handleSubmit = (e) =>{
    e.preventDefault()

    if(edit){
      const updatedtodo = todos.map((item) => 
      item.id === currenttodo ? {...item,text:todo}:item)
      setTodos(updatedtodo);
      setEdit(false)
    }else{
      const newTodo = {
        id:Date.now(),
        text:todo
      };
      setTodos([...todos,newTodo])
    }
    setTodo('')
  }

  const editing = (id,text) =>{
    setEdit(true)
    setCurrenttodo(id)
    setTodo(text);
  }

  const filtertodos = todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
  

  return(
    <div>
      <Container maxWidth="sm" style={{marginTop:"2rem"}}>
      <Typography variant="h4" align="center">
        Todo App
      </Typography>
      <TextField
      label="search tasks"
      variant="outlined"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      fullWidth
      style={{marginBottom:"1rem"}}></TextField>

      <form onSubmit={handleSubmit} style={{display:"flex", justifyContent:"center", marginBottom:"1rem"
      }}>
        <TextField label="Add or Edit Task"
        variant="outlined"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        style={{marginBottom:"0.5rem", flexGrow:1}}></TextField>
        
        <Button variant="contained" color="primary" type="submit" style={{height:"50px", marginLeft:"10px"}}>
        {edit ? 'Edit task': 'Add Task'}
      </Button>
      </form>

      <List>
        {filtertodos.length > 0 ? (
          filtertodos.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemText primary={todo.text}></ListItemText>
              <IconButton edge="end" onClick={() => editing(todo.id,todo.text)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end"onClick={() => setTodos(todos.filter((item) => item.id !== todo.id))}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))
        ):(
          <Typography variant="body1" align="center">No Tasks Found</Typography>
        )}
      </List>
      
      </Container>
    </div>
  )
}

export default App;