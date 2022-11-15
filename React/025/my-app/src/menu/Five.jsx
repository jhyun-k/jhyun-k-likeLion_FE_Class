import React from 'react'

export default function One({listName,handleChangeId}) {
  return (
    <li 
            id = "five" 
            style = {listName === 'five'? 
              {color:"blue"} : {color:"black"}}
            onClick={handleChangeId}
          >
            Five
          </li>
  )
}
