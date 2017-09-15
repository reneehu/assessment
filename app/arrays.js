exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    // fancy way using reduce()
    var sum = arr.reduce(
      ( a, b )  => a + b,
      0
    );
    return sum;

    // old fashion way
    // var total = 0;
    // for (var i = 0; i < arr.length; i++) {
    //   total += arr[i];
    // }
    // return total;
  },

  remove: function(arr, item) {
    // var newArr = [];
    // for(i = 0; i < arr.length; i++ ) {
    //   if ( item != arr[i] ) {
    //     newArr.push(arr[i]);
    //   }
    // }

    // return newArr;
    var newArr = arr.slice().filter(i =>
    {
      arr[i] != item
    }
    );
    console.log(newArr);
    return newArr;

  },

  removeWithoutCopy: function(arr, item) {
    for(i = 0; i < arr.length; i++ ) {
      if (item === arr[i]) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
