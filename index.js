function theBeatlesPlay (array1, array2){
  var arr = [];
  for (var i = 0; i < array1.length; i++){
    arr.push(`${array1[i]} plays ${array2[i]}`);
  }
  return arr
}

function johnLennonFacts (array){
  var arr = [];
  var i = 0;
  while (i < array.length){
    arr.push(`${array[i]}` + `!!!`);
    i++;
  }
  return arr
}

function iLoveTheBeatles (num){
  var arr = [];
  var i = 0;
  do {
    arr.push('I love the Beatles!');
    i++;

  } while (i < 15 && num < 15){
    num++;
  }
  return arr
}
