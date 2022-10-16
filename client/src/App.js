import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  // const [playing, setPlaying] = useState(false);

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

  async function runStat() {
    fetch("/stat")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      console.log("data??? ", data)
    return data;
  }
  
  // handle play
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await playFile();
    } catch (err) {
      console.log(err);
    }
  };
  const handleStop = async (e) => {
    e.preventDefault();
    try {
      await runStat();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button 
        style={{
          fontSize: 230,
          color: "rgb(247, 227, 243)",
          fontFamily: "courier",
          // textEmphasis: "triangle filled yellow",
          // textEmphasis: "bold",
          backgroundColor: "rgb(190, 127, 55)",
          padding: "3%",
          fontWeight: "bolder",
          // border: "5px solid rgb(51, 31, 31)"
          border: "none",
          backgroundImage: 
            "linear-gradient(rgb(237, 169, 187), rgb(207, 196, 233)",
          boxShadow: "2px 2px 1px #f700ff30, 10px 10px 6px rgb(255, 254, 214)"
        }}
        type="submit">
          Play
        </button>
      </form>

      <form onSubmit={handleStop}>
        <button 
        style={{
          fontSize: 230,
          color: "rgb(247, 227, 243)",
          fontFamily: "courier",
          // textEmphasis: "triangle filled yellow",
          // textEmphasis: "bold",
          backgroundColor: "rgb(190, 127, 55)",
          padding: "3%",
          fontWeight: "bolder",
          // border: "5px solid rgb(51, 31, 31)"
          border: "none",
          backgroundImage: 
            "linear-gradient(rgb(237, 169, 187), rgb(207, 196, 233)",
          boxShadow: "2px 2px 1px #f700ff30, 10px 10px 6px rgb(255, 254, 214)"
        }}
        type="submit">
          Stop
        </button>
      </form>
      {data && 
        data.map((stat) =>
          <ul>
            <li>{stat}</li>
          </ul>
        )}
    </>
  );
}

export default App;