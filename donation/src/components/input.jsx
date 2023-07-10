import React from 'react'

function input({type, name, placeholder, onChange}) {
  return (
      <input placeholder={placeholder} type={type} name={name} onChange={onChange} />
  )
}

export default input