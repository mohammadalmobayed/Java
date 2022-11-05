let operator = prompt("Enter Ther Operator please :");
    x = prompt("Enter X number please :");
    y = prompt("Enter Y number please :");
    numX = Number(x);
    numY = Number(y);

if ( operator == "+" ) {
    console.log (numX + numY);
    document.write (numX + numY);
}  
else if ( operator== "-" ) {
    console.log (numX - numY);
    document.write (numX - numY);
}  
else if ( operator == "*" ) {
    console.log (numX * numY);
    document.write (numX * numY);
}  
else if ( m == "/" ) {
    console.log (numX / numY);
    document.write (numX / numY);
}  
else {
    document.write("This is the wrong ");
}