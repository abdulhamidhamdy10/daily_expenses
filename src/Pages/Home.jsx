import { Button, IconButton, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Home() {

    const drwerwidth = 240;
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const addTask = () => {
        if (input) {
            if (editIndex !== null) {
                const updatedTasks = tasks.map((task, index) =>
                    index === editIndex ? input : task
                );
                setTasks(updatedTasks);
                setEditIndex(null);
            } else {
                setTasks([...tasks, input]);
            }
            setInput('');
        }
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const editTask = (index) => {
        setInput(tasks[index]);
        setEditIndex(index);
    };
    return (
        <div>
            <div className="App ml-auto mr-auto" sx={{ ml: `${drwerwidth}px` }}>
                <h1>To Do List</h1>
                <div>

                    <TextField className='input' size='small' id="outlined-basic" label="Task" variant="outlined" type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Add or edit a task" />

                    <Button sx={{ ml:"8px" , padding:"7px"}} color='success' onClick={addTask} variant="contained" endIcon={<SendIcon />}>
                        {editIndex !== null ? 'Update' : 'Add'}
                    </Button>
                </div>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index} className='item'>
                            {task}
                            <div className='buttons'>
                                <Button size='small'  sx={{ mr: "8px", padding:"8px" }} variant="outlined" startIcon={<EditIcon />} onClick={() => editTask(index)}>
                                    Edit
                                </Button>
                                <Button size='small' sx={{  padding:"8px" }} color='error' variant="outlined" startIcon={<DeleteIcon />} onClick={() => removeTask(index)}>
                                    Delete
                                </Button>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
