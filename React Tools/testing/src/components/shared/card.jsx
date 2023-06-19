import PropTypes from 'prop-types'

function Card({ children, reverse }) {

  // !Conditional Class - The move
  return (
    <div className={`card ${reverse && 'reverse'}`} >
      {children}
    </div>
  )

  // ?Conditional Style -- Not the move
  // return (
  //   <div className='card' style={{
  //     backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
  //     color: reverse ? '#fff' : '#000',
  //   }}>
  //     {children}
  //   </div>
  // )
}

// We can make it a default prop that we dont have to call back to on the feedback list itself, everything about the card can be done in the card
Card.defaultProps = {
  reverse: true,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card