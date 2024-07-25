import React from 'react'

const UserCard = (props) => {
    console.log(props.data)
  return (
    <div className='user-card'>
      <img className='user-img' src={props.data.picture.thumbnail} />
      <h3>name{props.data.name.first}</h3>
      <h4>+91 {props.data.phone}</h4>
      <p>City {props.data.location.city},{props.data.location.state}</p>
      <h3>Gender {props.data.gender}</h3>
      
    </div>
  )
}

export default UserCard
