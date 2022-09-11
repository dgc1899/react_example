import './App.css';

const Person = (props) =>{
  return(
    <>
    <h1>First Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  );
}
const App = () => {
  return (
    <div className="App"> 
      <Person name = "Daniel" lastName = "Garcia" age = {23}/>
      <Person name = "John" lastName = "Doe" age = "?"/>
    </div>
  );
}

export default App;
