function areaOfSquare(side) {
  return side * side;
}

function areaOfRec(l, b) {
  return l * b;
}

function areaOfCircle(r) {
  return 3.14 * (r * r);
}

module.exports = {
  square: areaOfSquare,
  rectangle: areaOfRec,
  circle: areaOfCircle,
};
