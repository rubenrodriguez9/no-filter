/******************
 * YOUR CODE HERE *
 ******************/
const onlyOdds = function(arr){
  result = [];
  for(const odd of arr){
    if(odd % 2 === 1){
      result.push(odd)
    }
  }
  return result
}

const onlyEvens = function(arr){
  result = [];
  for(const even of arr){
    if(even % 2 === 0){
      result.push(even)
    }
  }
  return result
}


const shortNamesOnly = function(arr){
  let result = [];
  for(const str of arr){
    if(str.length < 7){
      result.push(str)
    }
  }
  return result
}

const dNames = function(arr){
  let result = [];
  for(const str of arr){
    if(str[0] === 'D'){
      result.push(str)
    }
  }
  return result

}



/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
