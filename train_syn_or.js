var synaptic = require("synaptic");

var Neuron = synaptic.Neuron,
  Layer = synaptic.Layer,
  Network = synaptic.Network,
  Trainer = synaptic.Trainer,
  Architect = synaptic.Architect;

var inputLayer = new Layer(2);
var outputLayer = new Layer(1);

var input = inputLayer.project(outputLayer);
