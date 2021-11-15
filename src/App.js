import Header from './components/Header'
import Sub from './components/Subs'
import { useState } from 'react'
import AddSub from './components/AddSub'
import React from 'react'
import Button2 from './components/Button2'
import ReturnGPA from './components/ReturnGPA';


const App = () => {
  const [showAddSub, setShowAddSub] = useState(false)
  const [subs, setSubs] = useState(
    [ ]
)
//Delete 
const deleteSub = (id) =>{
  console.log('lol')
  setSubs(subs.filter((sub) => sub.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
    set(subs.map((sub) => sub.id === id ? { ...sub, remider: !sub.reminder} : sub ))
}

//CalculateGPA
const calculateGPA = () => {
  console.log('nanana')
  return subs.reduce((gpas, subject) => gpas + parseInt(subject.gpa, 10), 0) / subs.length
   
}

//Add
const addSub = (t) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newSub = { id, ...t}
  setSubs([...subs, newSub])
}
  return (
    <div className='container' >
      <Header title={"Subject and GPA Tracker"} onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {subs.length > 0  ? (<Subs subs={subs} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('Nothing yet to show)') }
      <ReturnGPA />
      <h1>{subs.length > 0 ?  (subs.reduce((gpas, subject) => gpas + parseInt(subject.gpa, 10), 0) / subs.length): ('0.0')}</h1>
  
      <></>
     
    </div>

   
  );
}


export default App;
