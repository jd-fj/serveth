import React, { useEffect, useState } from "react";

function App() {
  const [statData, setStatData] = useState(null);
  const [statsData, setStatsData] = useState(null);
  const [playbackData, setPlayData] = useState(null);
  // const [playing, setPlaying] = useState(false);

  useEffect(() => {
    runStat();
    runStats();
  }, []);

  async function playFile() {
    fetch("/play")
      .then((res) => res.json())
      .then((data) => setPlayData(data));
      // .then((data) => console.log("HUH?!", datplaybackData));
    return playbackData;
  }

  async function runStat() {
    fetch("/stat")
      .then((res) => res.json())
      .then((data) => setStatData(data.stat))
  }
  async function runStats() {
    fetch("/stats")
      .then((res) => res.json())
      .then((data) => setStatsData(data.stats))
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
  const triggerStatCommand = async (e) => {
    e.preventDefault();
    try {
      await runStat();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
          <button 
          style={{
            fontSize: 100,
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

        <form onSubmit={triggerStatCommand}>
          <button 
          style={{
            fontSize: 100,
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
            Stat
          </button>
        </form>
      </div>


{/* --------------------STATS--------------------------- */}
      <div >
        <h1>Stats Data</h1>
          {statsData && 
            statsData.map((stat) =>
              <ul>
                <li>{stat}</li>
              </ul>
          )}
        <h1>Stat Data</h1>
          {statData && 
            statData.map((stat) =>
              <ul>
                <li>{stat}</li>
              </ul>
          )}
      </div>
{/* --------------------STATS--------------------------- */}
    </>
  );
}

export default App;