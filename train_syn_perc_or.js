var synaptic = require("synaptic");

var Neuron = synaptic.Neuron,
  Layer = synaptic.Layer,
  Network = synaptic.Network,
  Trainer = synaptic.Trainer,
  Architect = synaptic.Architect;

var myPerceptron = new Architect.Perceptron(2,0,1);
var trainer = new Trainer(myPerceptron);

var trainingSet = [
  {
    input: [0,0],
    output: [0]
  },
  {
    input: [0,1],
    output: [1]
  },
  {
    input: [1,0],
    output: [1]
  },
  {
    input: [1,1],
    output: [0]
  },
]

var result = trainer.train(trainingSet);
console.log(result);
