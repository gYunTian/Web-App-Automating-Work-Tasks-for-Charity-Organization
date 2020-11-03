import React, {useContext, useState, useEffect} from 'react'
import {ScheduleListContext} from './context/ScheduleListContext'

const ScheduleForm = () => {
    const{addSchedule, editItem, editSchedule} = useContext(ScheduleListContext)    
    const [title, setTitle] = useState("")

    const handleChange = e =>{
        setTitle(e.target.value)
    }
    const handleSubmit = e =>{
        e.preventDefault()
        if (!editItem) {
            addSchedule(title)
            setTitle('')
        } else {
            editSchedule(title, editItem.id)
        }
        }

    
    useEffect(() => {
        if (editItem !== null) {
          setTitle(editItem.title)
          console.log(editItem)
        } else {
          setTitle('')
        }
      }, [editItem]);
    return(
        <form onSubmit = {handleSubmit} className = "form">
            <input 
                onChange = {handleChange}
                value = {title}
                
                type = "text" 
                className = "task-input" 
                placeholder = "Add Title..."
                required
            />
        <div className = "buttons">
            <button type= "submit" className = "btn add-schedule-btn">
                {editItem ? 'Save Schedule':'Add Schedule'}
            </button>
            <button className = "btn clear-btn">
                Clear
            </button>
        </div>

        </form>
    )


}

export default ScheduleForm