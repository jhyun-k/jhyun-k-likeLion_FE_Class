import React from 'react'

export default function One({listName,handleChangeId}) {
  return (
    <li 
            id = "three" 
            style = {listName === 'three'? 
              {color:"blue"} : {color:"black"}}
            onClick={handleChangeId}
          >
            Three
          </li>
  )
}
