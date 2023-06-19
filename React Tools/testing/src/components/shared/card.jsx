import React from 'react'

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

Card.defaultProps = {
  reverse: true,
}

export default Card