import PropTypes from 'prop-types'

const Button2 = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
     // style={{ backgroundColor: #F1485B }}
      className='btn2'
    >
      Calculate GPA
    </button>
  )
}

Button2.defaultProps = {
  color: 'steelblue',
}

Button2.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button2