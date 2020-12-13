
import './App.css';
import Mycomponent from './Mycomponent';
import {useSelector,useDispatch} from 'react-redux'
import {Product,Card} from './Product';
function App() {
  const dispatch =useDispatch() 
    const counter =useSelector(state=>state.counter)
  return (
    <div className="App">
    
     <h1>{counter}</h1>
     <button onClick={()=>dispatch({type:'INC'})}>
INC
     </button>
     <button onClick={()=>dispatch({type:'DCR'})}>
DCR
     </button>
     <Product/>
     
    </div>
  );
}

export default App;
