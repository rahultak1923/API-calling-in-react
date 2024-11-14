import React from 'react'

const Input = (props) => {
  return (
    <div>
      <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">City</span>
  <input type="text" class="form-control" placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
</div>
    </div>
  )
}

export default Input
