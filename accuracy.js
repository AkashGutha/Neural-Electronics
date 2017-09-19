var brain = require("brain");
var NN = brain.NeuralNetwork;
var args = require("yargs").argv;

// get arguments from console.
var n_bits = args.bits || args.b;
var path = args.path || args.p;

var data = require("./Data/"+ ( n_bits || 4 ) +"bit_add_in_out.json");

var D = [];

for (var i = 0; i < data.inputs.length; i++) {
  D.push({ input: data.inputs[i], output: data.outputs[i] });
}

var precompute = require( path || "./precomputed-net.json");

// generate our NN from json
var Net = new NN(precompute.networkData).fromJSON(precompute);

var accuracy = 0;

D.forEach(function(data) {
    var O = activate(Net.run(data.input));
    if(O.sort().toString() === data.output.sort().toString()) accuracy = accuracy + 1;
}, this);

accuracy = (accuracy/ D.length) * 100;

console.log("accuracy is " + accuracy);

function activate(arr) {
  return arr.map(e => (e > 0.5 ? 1 : 0));
}
