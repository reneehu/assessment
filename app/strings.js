exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var res = str.split('').splice(0, (str.length - amount)).join('');
  	console.log(str, amount,res);
  	return res;
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {

  }
};
