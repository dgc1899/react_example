import './App.css';

const App = () => {
  const name = "Daniel";
  const isNameShowing = false;
  return (
    <div className="App"> 
    {name ? 
    (
      <>
      <h1>{name}</h1>
      </>
    )
    :
    (
      <>
      <h1>test</h1>
      <h2>There is no name</h2>
      </>
    ) }
    </div>
  );
}

export default App;
