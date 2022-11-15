import styled from 'styled-components'

const ContnetsDivOne = styled.div`
  color: red;
`

const ContnetsDivTwo = styled.div`
  color: green;
`

const ContnetsDivThree = styled.div`
  color: blue;
`
const ContentsTitle = styled.h1`
  color: skyblue;
`

function App() {
  return (
    <>
      <ContnetsDivOne>hello world</ContnetsDivOne>
      <ContnetsDivTwo>hello world</ContnetsDivTwo>
      <ContnetsDivThree>hello world</ContnetsDivThree>
      <ContentsTitle>하이루</ContentsTitle>
    </>
  );
}

export default App;