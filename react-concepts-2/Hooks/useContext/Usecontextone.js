// Context: provides a way to pass data through the component tree without having to pass props down manually at every level
// moving props from grandparent to parent to child
// pass: C -> E -> F
// Only first most component is passed in app.js
// Steps used in useContext():
// 1. create context in app component
// 2. wrap component with UserContext.Provider + also provide some value
// 3. export createcontext from app component + import it in leaf component