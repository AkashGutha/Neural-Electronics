var brain = require("brain.js");
var NN = brain.NeuralNetwork;
var fs = require("fs");
var args = require("yargs").argv;

// get arguments from console.
var n_bits = args.bits || args.b;
var error = args.error || args.e;
var learningRate = args.learningRate || args.l;
var multiplier = args.multiplier || args.m;
var logPeriod = args.logPeriod || args.lp;

// if we have n_bits argument then make the path for the data file
if (n_bits) {
  var dataPath = "./Data/" + n_bits + "bit_add_in_out.json";
}
// get data from the path or fallback to 4bit data
var data = require(dataPath || "./Data/4bit_add_in_out.json");

// make the network with n_bits or fallback to 16 for 4 bits
var network = new NN({
  hiddenLayers: [(multiplier || 4) * (parseInt(n_bits) || 16)]
});

// preprocessing the data
var Data = [];
for (var i = 0; i < data.inputs.length; i++) {
  Data.push({ input: data.inputs[i], output: data.outputs[i] });
}

console.log("data preprocessing done");

// trianing options
var trainingOptions = {
  errorThresh: error || 0.01, // error threshold to reach
  iterations: 100000000, // maximum training iterations
  log: true, // log progress periodically
  logPeriod: logPeriod || 100, // number of iterations between logging
  learningRate: learningRate || 0.01, // learning rate
  activation: x => (x >= 0.5 ? 1 : 0)
};

console.log(trainingOptions);

// train the network
network.train(Data, trainingOptions);

// convert the network into a json obj and save it.
var json = network.toJSON();

// add metadata about the network into the compute
json.networkData = {
  n_bits: n_bits,
  error: error,
  learningRate: learningRate,
  trainingOptions: trainingOptions
};

// write the JSON compute into a new file
fs.writeFile(
  "./precomputed-net-" +
    new Date().toISOString() +
    "-" +
    n_bits +
    "Bit" +
    ".json",
  JSON.stringify(json),
  err => {
    console.log(err);
  }
);
