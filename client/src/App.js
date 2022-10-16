import React, { useEffect, useState } from "react";
import CustomButton from './components/customButton';

function App() {
  const [statData, setStatData] = useState(null);
  const [statsData, setStatsData] = useState(null);
  const [playbackData, setPlayData] = useState(null);
  // const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // runStat();
    // runStats();
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
      await runStats();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
          <CustomButton buttonText="Glay"></CustomButton>
        </form>

        <form onSubmit={triggerStatCommand}>
          <CustomButton buttonText="Stat"></CustomButton>
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