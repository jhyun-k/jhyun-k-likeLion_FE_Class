import React from 'react'

export default function One({listName,handleChangeId}) {
  return (
    <li 
            id = "four" 
            style = {listName === 'four'? 
              {color:"blue"} : {color:"black"}}
            onClick={handleChangeId}
          >
            Four
          </li>
  )
}
