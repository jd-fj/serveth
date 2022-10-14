import React, { useEffect } from "react";

function App() {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    fetch("/api")
      .then((res) => res.json())
      // .then((data) => setData(data));
      .then((data) => console.log(data));
    return data;
  }
  

  return (
    <>
    </>
  );
}

export default App;