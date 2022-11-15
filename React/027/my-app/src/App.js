import One from './components/One/One'
import Two from './components/Two/Two'
import styles from './app.module.css'


function App() {
  return (
    <>
    <h1>hello world</h1>
    <p className={styles.contents}>hello world 222</p>
      <One/>
      <Two/>
    </>
  );
}

export default App;
