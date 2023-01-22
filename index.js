const express = require("express");

function expressFillIn(port) {
  const app = express();
  app.listen(port, (err) => {
    if (err) {
      console.log(`Error in running express server`);
    }
    console.log(`Server Up and running on port :: ${port}`);
  });
}
module.exports = expressFillIn;
