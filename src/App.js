import React from 'react';
import './App.css';
import Forma from './Components/Forma'

function App() {
  return (
    <div className="App">
      <div className="Header-Back">
        <h1 className="Header">PAWTASTIC VENTURES</h1>
      </div>
     <div>
       <img className= "img-display" src="/images/dog.jpg" alt="img"/>
       <img className= "img-display" src="/images/dogc.jpg" alt="img"/>
       <img className= "img-display" src="/images/dogd.jpg" alt="img"/>
       <img className= "img-display" src="/images/doge.jpg" alt="img"/>
       <img className= "img-display" src="/images/dogf.jpg" alt="img"/>
       <img className= "img-display" src="/images/dogg.jpg" alt="img"/> 
     </div>
     <div>
       <h1>FILL UP THE FORM</h1>
       <Forma />
     </div>
     <br></br><br></br>
    </div>
  );
}

export default App;
