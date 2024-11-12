import React from 'react'

const Cartheader = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
      <h2 >Your cart</h2>
      <span style={{ fontSize: '30px', marginRight: '8px', cursor:"pointer" }}> <a href="/">&#128722;</a> </span>{/* Cart icon with some margin */}
    </div>
    <hr />
    </div>
  )
}

export default Cartheader
