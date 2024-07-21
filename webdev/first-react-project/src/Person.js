import React from 'react';


function Person({p}) {
    // const personlist = person.map(name => <Person person={persion} />)
  return (
    <div>
      {p.name}, {p.id}
    </div>
  )
}

export default Person
