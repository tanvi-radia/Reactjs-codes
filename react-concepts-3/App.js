import React from 'react';
import './App.css';
// import ClassCounter from './Hooks/ClassCounter';
// import Quiz from './Hooks/UseState/Quiz';
// import UseState1 from './Hooks/useState/UseState1';
// import UseStateTwo from './Hooks/UseState/UseStateTwo';
// import UseStateThree from './Hooks/useState/UseStateThree';
// import Class from './Hooks/useEffect/Class';
// import UseEffect from './Hooks/useEffect/UseEffect';
// import UseEffectone from './Hooks/useEffect/UseEffectone';
// import UseEffectthree from './Hooks/useEffect/UseEffectthree';
// import DataFetching from './Hooks/useEffect/DataFetchingone';
// import ComponentC from './Hooks/useContext/ComponentC';
export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Tanvi'}>
      <ComponentC />
      </UserContext.Provider>
      {/* <Quiz /> */}
      {/* <ClassCounter /> */}
      {/* <UseState1 /> */}
      {/* <UseStateTwo /> */}
      {/* <UseStateThree /> */}
      {/* <Class /> */}
      {/* <UseEffect /> */}
      {/* <UseEffectone /> */}
      {/* <UseEffectthree /> */}
      {/* <DataFetching /> */}
    </div>
  );
}

export default App;