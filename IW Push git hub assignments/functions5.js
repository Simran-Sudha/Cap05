//Problem 5: Write a function to replace spaces in a given string with - .

function alph(str){
  let bag="";
  for(let i=0;i<str.length;i++){
    if(str[i]==" "){
      bag=bag+"-";
    }
    else{
      bag=bag+str[i];
    }
  }
console.log(bag);
}
alph("Tic Tac Toe")
alph("Opposite Words")