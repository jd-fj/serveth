const express = require("express");
const sox = require('sox');
const { exec } = require('node:child_process');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/play", (req, res) => {
  exec("play test.mp3 trim 0 3", (error, stdout, stderr) => {
    if (error) {
      console.log('Error: ', error);
    }
    if (stderr) {
      console.log('Stderr: ', stderr);
    }
    console.log('errything good here')
    res.send({message: "playing test.mp3"});
  })
  console.log("end of /play func")
});

app.get("/stat", async (req, res) => {
  exec("sox test.mp3 -n stat", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log("stderr: ", stderr)
      const soxOutput = stderr.trim().split("\n")
      res.send({stat: soxOutput})
    }

    // res.json({message: stdout});
  });
});
app.get("/stats", async (req, res) => {
  exec("sox test.mp3 -n stats", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log("stderr: ", stderr)
      const soxOutput = stderr.trim().split("\n")
      res.send({stats: soxOutput})
    }

    // res.json({message: stdout});
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// async function runCommand(command) {
//   exec(command, (error, stdout, stderr) => {
//     if (error) {
//       console.log(`error: ${error.message}`);
//       return;
//     }
//     console.log(`am i even working??? ${stdout}`);
//     return stdout;
//   });
//   return returneth;
// }
