const express = require("express");

function expressBooster(port) {
  const app = express();
  app.listen(port, () => {
    console.log(`Server Up and running on port ${port}`);
  });
}
module.exports = expressBooster;
