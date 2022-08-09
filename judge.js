const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  vegetables.sort(function (a, b) {
    return b[metric] - a[metric];
  });
  return vegetables[0].submitter;
};