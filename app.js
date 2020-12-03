let sin = (x) => x - (Math.pow(x, 3)/factorialize(3)) + 
(Math.pow(x, 5)/factorialize(5)) + (Math.pow(x, 7)/factorialize(7));




function factorialize(num) {
    // If the number is less than 0, reject it.
    if (num < 0) 
          return -1;
      
    // If the number is 0, its factorial is 1.
    else if (num == 0) 
        return 1;
      
    // Otherwise, call the recursive procedure again
      else {
          return (num * factorialize(num - 1));
         
      }
  }


  console.log(sin(30));
 