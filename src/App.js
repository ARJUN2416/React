import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

import Alert from './component/Alert';
import { useState } from 'react';


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
     
      
     
      
      <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container">
       <TextForm heading="Enter the text to analyze" mode={mode} />
       
       
       </div>
    </>
  );
}

export default App;
