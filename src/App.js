
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Homecomponent from './components/Homecomponent';
import Secondcomponent from './components/Secondcomponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Thirdcomponent from './components/Thirdcomponent';
import Fouthcomponent from './components/Fouthcomponent';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <header className='bg-warning p-5'>
      <h1 className='text-dark text-center'>Welcome to Reactjs</h1>
      </header>
      {/* FIRSTCOMPONENT GOES HERE  */}
      <Firstcomponent/>
      {/* Secondcomponents goes here  */}
      <Secondcomponent/>
      {/* Homecomponent goes here  */}
      <Homecomponent/>
      {/* Thirdcomponent goes here  */}
      <Thirdcomponent/>
      <Fouthcomponent/>
      {/* About  */}
      <About/>
    </div>
  );
}

export default App;
