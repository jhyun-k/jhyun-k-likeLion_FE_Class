import './app.css'
import {One} from './components/One';
import Two from './components/Two';

function App() {
  return (
    <div className="App">
      <One/>
      <Two/>
      <h1 className='hello'>안녕</h1>
      <div style={{backgroundColor:"black",color:"white"}}>안녕</div>
    </div>
  );
}

export default App;
