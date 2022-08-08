function lastIndexOf(a, b) {
  if (a.length === 0 || a === 'undefined') {
    return -1;
  }
  for (let i = (a.length) - 1; i >= 0; i--) {
    if (a[i] === b) {
      return i;
    } else if (i === 0 && a[i] !== b) {
      return -1;
    }
  }
}
console.log(lastIndexOf([], 3));