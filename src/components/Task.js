import { FaTimes } from 'react-icons/fa'

const Sub = ({ sub, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${sub.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(sub.id)}
    >
      <h3>
        {sub.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(sub.id)}
        />
      </h3>
      <p>{sub.gpa}</p>
    </div>
  )
}

export default Sub
