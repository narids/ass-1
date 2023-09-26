import logo from './logo.svg';
import './App.css';
import functionComponent from './component/functionComponent';
import Gallery, { Profile, Profile1 } from './component/Gallery';
import StateExample from './component/StateExample';
import Hello from './component/hello';
function App() {

  return (
    
      <div className="App">
        <functionComponent/>
        <Gallery/> 
        <Profile/>
        <Profile1/>
        <hr/>
        <StateExample/>
        <Hello who="tamAnh" age={18} />
        <Hello who="tamAnh"/>
      </div>
      
  );
}

export default App;
