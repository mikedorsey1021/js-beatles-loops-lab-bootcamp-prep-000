function theBeatlesPlay (array1, array2){
  var arr = [];
  for (var i = 0; i < array1.length; i++){
    arr.push(`${array1[i]} plays ${array2[i]}`);
  }
  return arr
}
