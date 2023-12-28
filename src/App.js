import React from "react";

import Expenses from "./Components/Expenses/Expenses";

const App=()=>{
  let expenses=[
    {
      id:'e1',
      date:new Date(2021,2,12),
      title:'car insurance',
      amount:200
    },
    {
      id:'e2',
      date:new Date(2021,2,22),
      title:'house rent',
      amount:300
    },
    {
      id:'e3',
      date:new Date(2021,2,23),
      title:'home loan',
      amount:400
    }, 
    {
      id:'e4',
      date:new Date(2021,2,26),
      title:'bus expense',
      amount:500
    }
  ]

  return(
    <div>
      <Expenses item={expenses}/>
    </div>
  )
}

export default App;