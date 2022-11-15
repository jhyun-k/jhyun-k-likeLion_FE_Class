import React from 'react'

export default function One({listName,handleChangeId}) {
  return (
    <li 
            id = "one" 
            style = {listName === 'one'? 
              {color:"blue"} : {color:"black"}}
            onClick={handleChangeId}
          >
            One
          </li>
  )
}
