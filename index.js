var express = require("express");
var cors = require("cors");
var Web3 = require("web3");
var app = express();

const web3 = new Web3();

function get_checksum(req, res) {
  let ret;
  try {
    ret = {
      result: "success",
      address: web3.utils.toChecksumAddress(req.params.id),
      message: "I think this is the right address.",
    };
  } catch (e) {
    ret = {
      result: "fail",
      message: `Given address '${req.params.id}' is not a valid Ethereum address.`,
    };
  }
  console.log(ret);
  res.send(ret);
}

app.use(cors());

app.get("/checksum/:id", get_checksum);

// app.listen(3000, function () {
//   console.log("Example app listening on port 3000!");
// });
module.exports = app;
