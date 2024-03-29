import { useRouter } from 'next/router'
import React from 'react'
import { details } from '.'

const detailpage = () => {

  const router = useRouter()
  const developerId = parseInt(router.query.aboutid)

  const member = details.find(member => member.id === developerId)

  return (
    <div>
      {
        member ? (
          <div>
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </div>
        ) : (<p>developer not found</p>)
      }
    </div>
  )
}

export default detailpage;