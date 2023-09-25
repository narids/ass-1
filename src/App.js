import logo from './logo.svg';
import './App.css';
import functionComponent from './component/functionComponent';
import Gallery, { Profile, Profile1 } from './component/Gallery';
import StateExample from './component/StateExample';
function App() {

  return (
    
      <div className="App">
        <functionComponent/>
        <Gallery/> 
        <Profile/>
        <Profile1/>
        <hr/>
        <StateExample/>
      </div>
      
  );
}

export default App;
