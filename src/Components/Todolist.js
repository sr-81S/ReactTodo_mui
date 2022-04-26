import { TextField, Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import '../Components//Gridcss.css'
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todolist = () => {

  const [inval,setInval] = useState("");
  const [val, setVal] = useState([])

  const addVal = ()=>{
    if(inval!== ""){
      setVal([...val, inval])
      toast.success("TODO added",{
        position: "top-center"
      })
    }else{
      toast.warn("Pleasse Enter TODO",{
        position: "top-right"
      })
    }
    setInval("")
  }

  const clsVal = ()=>{
    setVal([])
    toast.success("All TODO Clear",{
      position: "top-right"
    })
  }


  const todoCls = (id)=>{
    const updateVal = val.filter((ele, ind)=>{
      return ind !== id
    })
    setVal(updateVal)
    toast.success("TODO Done",{
      position: "bottom-center"
    })
  }




  return (
    <>
        <div className='main-grid'>
          <div className='todo-div'>
            <div className='center-div'>
              <h1>TODO</h1>
              <TextField 
               sx={{ width: '40ch', mt:5 }}
               id="outlined-basic" label="Todo input" 
               variant="outlined" 
               value={inval} 
               onChange={(e)=>setInval(e.target.value)}
               />
              <Button 
              sx={{mt:2}} 
              variant="contained" 
              onClick={addVal}
              endIcon={<AddToPhotosIcon/>}>Add Todo</Button>
              <IconButton sx={{mt:1}} onClick={clsVal} color="primary" aria-label="upload picture" component="span">
                <AutoDeleteIcon/>
              </IconButton>
              <div className='todo-task'>
                {
                  val.map((v, ind)=>{
                      return(
                       <div key={ind}>
                           <h3><IconButton sx={{ml:3}} color="primary" aria-label="upload picture" component="span" onClick={()=>todoCls(ind)}><BookmarkAddedIcon/></IconButton>  {v}  </h3>
                       </div>
                      )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <ToastContainer/>
    </>
  )
}

export default Todolist