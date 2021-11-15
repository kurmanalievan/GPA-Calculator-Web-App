import { useState } from 'react'

const AddSub = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [gpa, setDay] = useState('')
  const [calculate, setReminder] = useState(false)

   

  const onSubmit = (e) => {
      e.preventDefault()

      if(!text){
          alert('Please add a subject')
          return
      }

      onAdd({ text, gpa, calculate})

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Subject</label>
        <input
          type='text'
          placeholder='Add name of the subject'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Score</label>
        <input
          type='text'
          placeholder='Add your score'
          value={gpa}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={calculate}
          value={calculate}
          onChange ={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddSub
