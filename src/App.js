import React, {useEffect} from 'react';
import Redtheme from "./pages/Redtheme";
import Greentheme from "./pages/Greentheme";
import Charcoaltheme from "./pages/Charcoaltheme";
import Bluetheme from "./pages/Bluetheme";
// import Navbar  from './pages/navbar';


function App() {

  const [randNumber, setRandNumber] = React.useState('');
  useEffect(() => {
    const number = Math.floor(Math.random() * 4) + 1;
    setRandNumber(number);
  }, [])
  return (

    <div> 
      
      {
        randNumber === 1 && ( <Redtheme /> )        
      }
      {
        randNumber === 2 && ( <Bluetheme /> )
      }
      {
        randNumber === 3 && ( <Greentheme /> )
      }
      {
        randNumber === 4 && ( <Charcoaltheme /> )
      }
    </div>

  );


}

export default App;