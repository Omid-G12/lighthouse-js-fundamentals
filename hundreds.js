const howManyHundreds = function (num) {
  var container; 
  if (num%100 === 0) {
    container = num / 100;
  } else {
    container = (num - (num%100)) / 100;
  }
  return container;
}
