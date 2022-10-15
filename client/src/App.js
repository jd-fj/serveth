import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [playing, setPlaying] = useState(false);

  // useEffect(() => {
  //   getData();
  // }, []);

  async function playFile() {
    fetch("/play")
      .then((res) => res.json())
      // .then((data) => setData(data));
      .then((data) => console.log(data));
    return data;
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await playFile();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <button type="submit">Play</button>
    </form>
    </>
  );
}

export default App;