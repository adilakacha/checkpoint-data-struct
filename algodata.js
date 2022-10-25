
var Set1 = [3, 1, 7, 9];
var Set2 = [4, 1, 9, 3];
var sum = 0;

for (var i = 0; i < Set1.length; i++) {
  var equal = false;
  for (var j = 0; j < Set2.length; j++) {
    
    if (Set1[i] === Set2[j]) {
      
      Set2[j] = 0;
      j--;
      equal = true;
    }
   
  }
  
  if (equal == true) {
    Set1[i] = 0;
  }
}

for (let j = 0; j < Set1.length; j++) {
  sum += Set1[j];
}
for (let j = 0; j < Set2.length; j++) {
  sum += Set2[j];
  console.log("loop", j, "Sum", sum);
}