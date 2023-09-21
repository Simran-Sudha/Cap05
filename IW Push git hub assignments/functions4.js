//Problem 4: Write a function to check if the char is a small case or not.

function check_case(char){
  let lower="abcdefghijklmnopqrstuvwxyz";
  let flag=false;
  for(let i=1;i<=lower.length;i++){
    if(char==lower[i]){
      flag=true;
      break;
    }
  }
  if(flag==true){
  console.log(char+"-"+"Lowercase")
}
else{
  console.log(char+"-"+"Uppercase")
}
}
check_case("W")
check_case("k")