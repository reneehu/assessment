exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {

  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {
  	console.log(parseFloat(a*b).toFixed(1))
  	return parseFloat(a*b).toFixed(1);
  }
};
