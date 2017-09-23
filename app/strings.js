exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	// var res = str.split('').splice(0, (str.length - amount)).join('');
  	// console.log(str, amount,res);
  	// return res;
   	var arr = str.split('');
   	var resArr = [];
   	for(i=0; i<arr.length; i++) {
   		if(arr[i]===arr[i+2]) {
   			
   		}
   	}
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {

  }
};
