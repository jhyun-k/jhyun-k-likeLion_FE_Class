import React from 'react'

export default function One({listName,handleChangeId}) {
  return (
    <li 
            id = "two" 
            style = {listName === 'two'? 
              {color:"blue"} : {color:"black"}}
            onClick={handleChangeId}
          >
            Two
          </li>
  )
}
