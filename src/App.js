import logo from './logo.svg';
import './App.css';
import functionComponent from './components/functionComponent';
import Gallery, { Profile, Profile1 } from './components/Gallery';
import StateExample from './components/StateExample';
import Hello from './components/hello';
import { EffectDemo } from './components/EffectDemo';
import EffectIntervalExample from './components/EffectIntervalDemo';
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
        <EffectDemo />
        <EffectIntervalExample />
      </div>
      
  );
}

export default App;
