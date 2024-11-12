import React from 'react'

const Header = () => {
  return (
    <div>
       <div className="d-flex justify-content-between align-items-center mb-3">
      <h2 >Add item to Cart</h2>
      <span style={{ fontSize: '30px', marginRight: '8px', cursor:"pointer" }}> <a href="/Cartnew">&#128722;</a> </span>{/* Cart icon with some margin */}
    </div>
    <hr />
    </div>
  )
}

export default Header
