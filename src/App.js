import logo from './logo.svg';
import './App.css';
import functionComponent from './component/functionComponent';
import Gallery, { Profile } from './component/Gallery';
function App() {
  return (
    
      <div className="App">
        <functionComponent/>
        <Gallery/> 
        <Profile/>
      </div>
  );
}

export default App;
