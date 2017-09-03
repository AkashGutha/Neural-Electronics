var NeuralNetwork = require("brain").NeuralNetwork;
var precompute = require("./precomputed-net.json");

// generate our NN from json
var Net = new NeuralNetwork().fromJSON(precompute);

var info = Net.run([1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0]);
console.log(info);

