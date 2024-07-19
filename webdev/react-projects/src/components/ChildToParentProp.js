// By using a callback function
import React from 'react'

function ChildToParentProp({printChildProp}) {
    const data = "Some value and calculation from child component";
    printChildProp(data)
  return (
    <div>
      
    </div>
  )
}

export default ChildToParentProp
