import React from 'react'
import Inputdetails from '../constants/Inputdetails'
import Buton from '../constants/Buton'
import { useState } from 'react'
import TaskList from './TaskList'

const EntryForm = ({onAddTodo}) => {
    const [newTitle,setNewTitle] = useState("");
    const [newDes,setNewDes] = useState("");

    const handleAddTask = () => {
      if(newTitle && newDes) {
        onAddTodo({
          newTitle,
          newDes
        });
        setNewTitle('');
        setNewDes('');
      }
    }
    

  return (
   <>
   </>
  )
}

export default EntryForm

// this is parent 