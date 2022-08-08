const carPassing = function (cars, speed) {
  // Your code in here ...
  var a = {
    time: Date.now(),
    speed: speed
  }
  cars.push(a);
  return cars;
};
