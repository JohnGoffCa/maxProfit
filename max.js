function maxProfit(array) {
  // if our array only has one number, we can't make any profits.
  if (array.length <= 1) return -1;

  var containsNum = false;
  for (var i = 0; i < array.length; i++) {
    if (!isNaN(array[i]) && (array[i] !== true || array[i] !== false)) 
      containsNum = true;
  }

  // if our array has no numbers, we can't make any profit. 
  if (!containsNum) return -1;

  var maxProfit = 0;
  var pair = [0, -1];

  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number'
      && Number.isNaN(parseInt(array[i], 10))) {
      continue;
    }

    for (var j = i + 1; j < array.length; j++) {
      if (typeof array[j] !== 'number'
        && Number.isNaN(parseInt(array[i], 10))) {
          continue;
      }

      var current = compare(array[i], array[j]);
      if (current > maxProfit) {
        maxProfit = current;
        pair[0] = array[i];
        pair[1] = array[j];
      }
    }
  }

  console.log(pair)
  return compare(pair[0], pair[1]);
}

function compare(a, b) {
  var result = b - a;
  if (result < 1) return -1;
  return result;
}

module.exports = maxProfit;
