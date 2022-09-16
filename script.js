const add = function(x, y) {
    let result = x + y;
    return result;
  };
  
  const subtract = function(x, y) {
      let result = x - y;
    return result;
  };
  
  const sum = function(array) {
    return array.reduce((total, current) => total + current, 0)
  };
  
  const multiply = function(array) {
    return array.reduce((total, current) => total * current,)
  };
  
  const power = function(a, b) {
      return Math.pow(a, b);
  };
  
  const factorial = function(n) {
    if (n === 0) return 1;
    let product = 1;
    for (let i = n; i > 0; i--) {
      product *= i;
    }
    return product;
  };