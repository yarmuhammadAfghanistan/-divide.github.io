  
 
  function includes(){

    const a = parseFloat(prompt("enter your number "));
const b = parseFloat(prompt("enter you second number"));
const c = a / b;

if (!isNaN(c)) {
    if (c === Infinity) {
        document.write("ya divide nahi ho sakta۔");
    } else {
        document.write(`${c}   ya divide ho sakta ha ۔` );
    }
} else {
    document.write(" rong input     ۔");
}

    
   


  }