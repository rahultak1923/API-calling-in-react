import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button type="button" class={`btn btn-${props.color}`  }onClick={props.onClick}>{props.value}</button>
    </div>
  )
}

export default Button
