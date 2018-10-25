const makeConstant = function(value) {
  return function() {
    const result = value;
    return value;
  }
}

const makeCounterFromN = function(countStart) {
  let count=0;
  return function() {
    count=countStart;
    countStart++;
    return count;
  }
}

const makeCounterFromZero = function() {
  return makeCounterFromN(0);
}

const makeDeltaTracker = function(oldKeyValue) {
  return function(deltaCurrentValue) {
    if(deltaCurrentValue == undefined ) {
      deltaCurrentValue = 0;
    }
    let record={old:oldKeyValue };
    record["delta"] = deltaCurrentValue;
    record["new"] = record["delta"]+record["old"];
    oldKeyValue=record["new"];
    return record;
  }
}

const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
