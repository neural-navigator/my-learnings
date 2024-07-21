import React from 'react'
import Person from './Person'

const person = [
    {
        id: 1,
        name: "Satya",
        age: 28,
        skill: "python"
    },
    {
        id: 2,
        name: "Narayan",
        age: 27,
        skill: "react"
    }
]

// const personlist = person.map((name) => <div>I am {name.name}, a {name.age} year guy having {name.skill}</div>)
const personList = person.map(p => <Person key={p.id} p={p} />)

function NameList() {
    // const names = ['Satya', 'narayan', 'pati']
    // const namelist = names.map((name) => <h2>{name}</h2>)
  return (
    // <Person person={personlist}></Person>
    <div>{personList}</div>
  )
}

export default NameList
