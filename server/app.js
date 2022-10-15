const express = require("express");
const sox = require('sox');
const { exec } = require('node:child_process');
const { stdout } = require("node:process");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/play", (req, res) => {
  // const deets = getFileInfo(); 
  // console.log("return these deets: ", deets);
  // res.json(deets);
  // res.json({ message: "Hello from server!" });
  const soxCommand = "play test.mp3";
  runCommand(soxCommand);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// function getFileInfo() {
//   const fileName = './test.mp3';
//   // get audio details from audio file
//   const soxCommand = `sox ${fileName} -n stat`;
//   exec(soxCommand, (err, stdout, stderr) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('stdout: ', stdout);
//     console.log(stderr);
//   });
//   // return the audio details in json format
//   return stdout;
// }

function runCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    console.log(`${stdout}`);
  });
  return;
}
