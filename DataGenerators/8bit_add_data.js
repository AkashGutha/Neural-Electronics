var fs = require("fs");
var binRep = require("./BinaryRepresentation");

var all = {};

var inputs_1 = [];
var inputs_2 = [];
var outputs = [];

for (var i = 0; i < 2 ** 8; i++) {
  for (var j = 0; j < 2 ** 8; j++) {
    inputs_1.push(binRep(i, 8));
    inputs_2.push(binRep(j, 8));
    outputs.push(binRep(i + j, 9).split(""));
  }
}

var inputs = [];
for (var i = 0; i < inputs_1.length; i++) {
  inputs.push(inputs_1[i].split("").concat(inputs_2[i].split("")));
}

// clean it into numbers
for(var i=0; i< inputs.length; i++){
    for(var j =0; j< inputs[i].length; j++){
        inputs[i][j] = parseInt(inputs[i][j]);
    }
}
for(var i=0; i< outputs.length; i++){
    for(var j =0; j< outputs[i].length; j++){
        outputs[i][j] = parseInt(outputs[i][j]);
    }
}

all.inputs = inputs;
all.outputs = outputs;

fs.writeFile("../Data/8bit_add.json", JSON.stringify(all));
