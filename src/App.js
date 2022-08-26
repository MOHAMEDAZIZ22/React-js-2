import './App.css';
import Foods from './components/zomato.js';
import Forms from './components/form';
import map from './components/map';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>

        <h1>Zomato</h1>

        <input type={"search"} placeholder="Search your favorite"></input>

        <button>LOGIN</button>
        <button>SignUp</button>

      </header>
      <Foods></Foods>

      <Forms></Forms>
    </div>

  );
}

export default App;







