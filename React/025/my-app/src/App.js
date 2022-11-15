import { useState } from 'react'
import One from './menu/One'
import Two from './menu/Two'
import Three from './menu/Three'
import Four from './menu/Four'
import Five from './menu/Five'
import Contents from './menu/Contents';



// user.login ? <Notice> : <Login>
// true && <h1>hello world</h1> -> h1 출력
// false && <h1>hello world</h1> -> false 출력
// true || <h1>hello world</h1> -> true 출력
// false || <h1>hello world</h1> -> h1 출력

// // 예시
// newMail.length > 0 && <h1>읽지 않은 메일이 있습니다.</h1> -> h1 출력
/* 연습문제
1. 메뉴는 아래 5개입니다.
one
two
three
four
five

2. 모든 파일들을 분리해주세요!
App.js에는 App만 있어야 합니다. */

export default function App() {
  const [listName, setListName] = useState('one')
  const handleChangeId = (e) => {
    setListName(e.target.id)
  }
  return (
    <>
      <nav>
        <ul>
        <One listName={listName} handleChangeId={handleChangeId}/>
        <Two listName={listName} handleChangeId={handleChangeId}/>
        <Three listName={listName} handleChangeId={handleChangeId}/>
        <Four listName={listName} handleChangeId={handleChangeId}/>
        <Five listName={listName} handleChangeId={handleChangeId}/>
        </ul>
      </nav>
      <Contents listName={listName}/>
    </>
  )
}