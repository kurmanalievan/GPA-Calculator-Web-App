import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'
import React from 'react'
import Button2 from './components/Button2'
import ReturnGPA from './components/ReturnGPA';


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
       
        ]
)
//Delete task
const deleteTask = (id) =>{
  console.log('lol')
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, remider: !task.reminder} : task ))
}

//CalculateGPA
const calculateGPA = () => {
  console.log('nanana')
  return tasks.reduce((gpas, subject) => gpas + parseInt(subject.gpa, 10), 0) / tasks.length
   
}

//AddTask
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}
  return (
    <div className='container' >
      <Header title={"Subject and GPA Tracker"} onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0  ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('Nothing yet to show)') }
      <ReturnGPA />
      <h1>{tasks.length > 0 ?  (tasks.reduce((gpas, subject) => gpas + parseInt(subject.gpa, 10), 0) / tasks.length): ('0.0')}</h1>
  
      <></>
     
    </div>

   
  );
}


export default App;
