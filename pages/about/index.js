import React from 'react'
 
export const details = [
  { id : 1, name: 'Yash', role: 'Senior Developer'},
  
  { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
  
  { id : 3, name: 'Suresh', role: 'Frontend Developer'}
  
  ]

const aboutpage = () => {

 
  return (
    <div>
      <ul>
        {
          details.map((person)=>(
            <li key={person.id}>
              <a href={`/about/${person.id}`}>{person.name}</a>
              </li>
          ))
        }
      </ul>
    </div>
  )
}

export default aboutpage;