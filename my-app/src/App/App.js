import React from "react";
import './App.css';

function App(props) {
  const [data, setData] = React.useState(null);

  console.log(props.userId);
  React.useEffect(() => {
    fetch("http://localhost:3000/user/"+props.userId)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        
        <p>Hello, {!data ? "" : data[0].name}</p>
      </header>
    </div>
  );
}

export default App;
