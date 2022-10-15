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

// app.get("/stop", async (req, res) => {
//   // const deets = getFileInfo(); 
//   // console.log("return these deets: ", deets);
//   // res.json(deets);
//   // res.json({ message: "Hello from server!" });
//   const soxCommand = "soxi -r test.mp3";
//   const huh = runCommand(soxCommand);
//   const resolveHuh = Promise.resolve(huh)
//   console.log('huh:', huh)
//   console.log('resolveHuh:', resolveHuh)


//     resolveHuh.then((value) => {
//       console.log("value: ", value);
//       // expected output: 123
//     });
//   res.json({})
// });

app.get("/stop", async (req, res) => {
  const result = exec("soxi -r test.mp3", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    console.log(`am i even working??? ${stdout}`);
    // console.log(' am i even working!!! ',stdout)
    const endOfRunCommand = Promise.resolve(stdout);
    // return resolve(stdout);
    // return endOfRunCommand
    res.json({message: stdout});
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

async function runCommand(command) {
  const returneth = exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    console.log(`am i even working??? ${stdout}`);
    // console.log(' am i even working!!! ',stdout)
    const endOfRunCommand = Promise.resolve(stdout);
    // return resolve(stdout);
    // return endOfRunCommand
    return stdout;
  });
  return returneth;
}
