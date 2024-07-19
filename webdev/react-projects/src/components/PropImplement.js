import React from 'react'

function PropImplement(props) {
  return (
    <div>
      <button style={{ backgroundColor: props.btn_color }}>{props.name}</button>
    </div>
  )
}

export default PropImplement
