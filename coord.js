const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
const finalPosition = function (moves) {
  var coord = []
  var x = 0;
  var y = 0;
  for (var move of moves) {
    if (move === 'west') {
      x -= 1;
    } else if (move === 'east') {
      x += 1;
    } else if (move === 'north') {
      y += 1;
    } else if (move === 'south') {
      y -= 1;
    }
    //coord.push(x, y);
    //console.log(move);
  }
  coord.push(x, y);
  return coord;
  //console.log(coord);
};
finalPosition(moves);