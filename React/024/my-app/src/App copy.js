import {useState} from 'react'

function Resume({이름, 취미, 자기소개}){
  const [like, setLike] = useState(1);
  let clap = 0 
    let arr = clap.toString().split('')
    for(let i = 0; i<arr.length;i++){
        if(arr[i]===3||arr[i]===6||arr[i]===9){
          clap++
        }
    } 
    clap?setLike(like+1):setLike(like)
  function handleClickLike(){
    setLike(like+1)
  }

  return (
    <section>
      <button onClick={handleClickLike}>like : {like}</button>
      <span>{clap ? clap : ''}</span>
    </section>
  )
}

function App() {
  return (
    <main>
      <Resume 
        이름="이호준" 
        취미="코딩" 
        자기소개="안녕하세요. 제주코딩베이스캠프 이호준입니다."
      />
    </main>
  );
}

export default App;