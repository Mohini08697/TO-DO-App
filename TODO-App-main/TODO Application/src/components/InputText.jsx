import React from 'react'

const InputText = (props)=>{
  console.log('==========> inputtext')
  return (
    <input type="text" 
    value={props.value}
    onChange={(event)=>{props.onHandleChange(event)}} 
    onKeyUp={props.onKeyHandler}
   />
  )
}

export default InputText;