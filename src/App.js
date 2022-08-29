import './App.css';
import Cartcomponent from './components/cart';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <hr width='92%' style={{margin: '0px auto'}}/>
      <Cartcomponent />
    </div>
  );
}

export default App;