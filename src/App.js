import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import Alert from './component/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>
  {
setAlert(
  {
msg: message,
 type: type

  }
 
)
setTimeout(() => {setAlert(null)
    
}, 3000);

  }


  
  const toggleMode=()=>
  {
if(mode==="light")

{

setMode("dark")
document.body.style.backgroundColor="grey";
showAlert("Dark mode enabled", "success")
}
else
{
setMode("light")
document.body.style.backgroundColor="white";
showAlert("Dark mode disabled", "success")
}


  }
  return  (
    <>
     
      <Alert alert={alert} />
     
      <Router>
      <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
      <div className="container">
         <Switch>
          <Route path="/about">
            <About/>
          </Route>
        
          <Route path="/home">
          <TextForm heading="Enter the text to analyze" mode={mode} />
          </Route>
        </Switch>
        </div>
        </Router>
  
    </>
  );
}

export default App;
