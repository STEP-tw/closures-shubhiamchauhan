const makeConstant = function(value) {
  return function() {
    const result = value;
    return result;
  }
}

const makeCounterFromN = function(countStart) {
  return function() {
    return countStart++;
  }
}

const makeCounterFromZero = function() {
  return makeCounterFromN(0);
}

const makeDeltaTracker = function(oldKeyValue) {
  return function(deltaCurrentValue) {
    deltaCurrentValue = (deltaCurrentValue || 0);
    let record = { old : oldKeyValue };
    record["delta"] = deltaCurrentValue;
    record["new"] = record["delta"]+record["old"];
    oldKeyValue = record["new"];
    return record;
  }
}

const makeFiboGenerator = function(firstTerm,secondTerm) {
  if(firstTerm == undefined && secondTerm == undefined) {
    firstTerm = 0;
    secondTerm = 1;
  }
  if(secondTerm == undefined && firstTerm != undefined) {
    secondTerm = firstTerm;
    firstTerm = 0;
  }
  let result = firstTerm;
  return function(){
    firstTerm = result;
    result = secondTerm;
    secondTerm = firstTerm + secondTerm;
    return firstTerm;
  }
}

const makeCycler = function(source) {
  let index = 0;
  sourceCopy = source.slice();
  return function() {
    index = (index % sourceCopy.length);
    let result = sourceCopy[index];
    index++;
    return result;
  }
}

const curry = function(fnName,firstArg) {
  return function(secArg, thirdArg) {
    return fnName(firstArg, secArg, thirdArg);
  }
}

const compose = function(fnName, nestedFn) {
  return function(firstArg, secArg) {
    return fnName(nestedFn(firstArg, secArg));
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
