var fs = require("fs");
var binRep = require("./BinaryRepresentation");

// required for making relative paths.
const path = require("path");

// a variable to hold all inputs and outputs
var all = {};

// input and output variables
var inputs = [];
var outputs = [];

for (var i = 0; i < 2 ** 2; i++) {
  inputs.push(binRep(i, 2).split(""));
}

// clean inputs into numbers
for (var i = 0; i < inputs.length; i++) {
  for (var j = 0; j < inputs[i].length; j++) {
    inputs[i][j] = parseInt(inputs[i][j]);
  }
}

// generate outputs from inputs
for (var i = 0; i < inputs.length; i++) {
  outputs[i] = inputs[i][0] ^ inputs[i][1];
}

// set inputs and outputs into all varibale.

all.inputs = inputs;
all.outputs = outputs;

// write data out into a file

fs.writeFile(
  path.join(__dirname + "./../Data/Xor_data.json"),
  JSON.stringify(all),
  err => {
    console.log(err);
  }
);
