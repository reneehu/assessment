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
    //   if ( item !== arr[i] ) {
    //     newArr.push(arr[i]);
    //   }
    // }
    // return newArr;

    //fancy way
    var newArr = arr.filter(i => i !== item ); //i is the element
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
    arr.push(item);
    return arr;

    //fancy way
    // arr = arr.concat(item);
    // return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item); //add item to beginning
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var arr3 = arr1.concat(arr2);
    return arr3;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    arr.forEach( i => i === item && count++  );
    return count;
  },

  duplicates: function(arr) {
    var seen = {};
    var dupes = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
    }

    for (var item in seen) {
      if (seen.hasOwnProperty(item) && seen[item] > 1) {
        dupes.push(parseInt(item));
      }
    }

    return dupes;
  },

  square: function(arr) {
    var newArr = arr.map(i=> i*i);
    return newArr;
  },

  findAllOccurrences: function(arr, target) {
    var allDup = arr.map((i,index) => i === target ? index : '').filter(i => i !== '');
    // console.log(allDup);
    return allDup;

//     var ret = [];

//     for (var i = 0, len = arr.length; i < len; i++) {
//       if (arr[i] === target) {
//         ret.push(i);
//       }
//     }

// console.log(ret);
//     return ret;
  }
};
