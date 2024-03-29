import { useRouter } from 'next/router'
import React from 'react'
import { data } from '.'

const detailpage= () => {
    const router=useRouter()
    const developerid=parseInt(router.query.detialid)

    const details=data.find(items=>items.id===developerid)
  return (
    <div>
     {
        details? (
            <div>
                <h2>{details.title}</h2>
                <img src={details.image}></img>
                <h2>{details.address}</h2>
            </div>
        ):(<p>image not found</p>)
     }
      
    </div>
  )
}

export default detailpage
