const calculateRectangleArea = function (length, width) {
  var rect;
  if (length >= 0 && width >= 0) {
    rect = length * width; //rect area
  }
  return rect;
}

const calculateTriangleArea = function (base, height) {
  var tri;
  if (base >= 0 && height >= 0) {
    tri = base * height / 2;
  }
  return tri;
}

const calculateCircleArea = function (radius) {
  const pi = Math.PI;
  var circ;
  if (radius >= 0) {
    circ = pi * radius * radius;
  }
  return circ;
}