import Sub from './Sub'

const Subs = ({ subs, onDelete, onToggle }) => {
  return (
    <>
      {subs.map((task) => (
        <Sub key={sub.id} sub={sub} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  )
}

export default Subs
