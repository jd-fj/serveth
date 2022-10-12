import React, { useEffect } from "react";

function App() {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    console.log("fetching")
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.messge));
  }, []);

  return (
    <div>
      {data ? (
        <h1>{data}</h1>
      ) : 'Loading...'}
    </div>
  );
}

export default App;