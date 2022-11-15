import styled from 'styled-components'

const One = styled.div`
  color : #ff0000;
`
const Two = styled.div`
  color : #008000;
  font-size: ${(props)=>props.size+'px'};
`
const Three = styled.div`
  color : ${(옵션)=>옵션.option==='하나'?'blue':'pink'};
`

function App(){
  return (
    <div>
    <One>hello</One>
    <Two size={32}>world</Two>
    <Three option={'하나'}>world</Three>
    </div>
  )
}

export default App