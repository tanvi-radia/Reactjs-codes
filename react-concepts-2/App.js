// import logo from './logo.svg';
import './App.css';
// import Greet from './Props.js/Greet';
// import Fun_props from './Props.js/Fun_props';
// import Class_props from './Props.js/Class_props';
import State_Class from './State/State_Class';
// import Counter from './State/Counter';
// import Prev_Counter from './State/Prev_Counter';


function App() {
  return (
    <div className="App">
    {/* <Greet name="Tanvi" surname="Radia" /> */}
    {/* <Fun_props name="Tanvi" surname="Radia" /> */}
    {/* <Greet name="Tanvi" surname="Radia"><p>This is  first children props</p></Greet>
    <Greet name="Tithi" surname="Radia"><button>Action</button></Greet>
    <Greet name="Disha" surname="Dattani"/> */}
    {/* <Class_props name="Tanvi" surname="Radia"><p>Hello !! This is children props</p></Class_props> */}
    <State_Class />
    {/* <Counter /> */}
    {/* <Prev_Counter /> */}
    </div>
  );
}

export default App;
