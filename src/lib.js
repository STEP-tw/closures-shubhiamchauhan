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

const makeFiboGenerator = function(firstTerm,secTerm) {
  if(firstTerm == undefined && secTerm == undefined){
    firstTerm = 0;
    secTerm = 1;
  }
  if(secTerm == undefined && firstTerm != undefined) {
    secTerm = firstTerm;
    firstTerm = 0;
  }
  let result = firstTerm;
  return function(){
    firstTerm = result;
    result = secTerm;
    secTerm = firstTerm + secTerm;
    return firstTerm;
  }
}

const makeCycler = function(source) {
  let index = 0;
  source = source.slice();
  return function() {
    if(index >= source.length) {
      index = 0;
    }
    let result = source[index];
    index++;
    return result;
  }
}

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
