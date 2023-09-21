//Problem 1: Create a function to check if a number is Prime or Not

function check_prime(num){
  let count=0;
  for(let i=1;i<=num;i++){
    if(num%i==0)
    count++;
  }
  if(count==2){
    console.log(num,"It is a prime number")
  }
  else{
    console.log(num,"It is not a prime number")
  }
}
check_prime(8)
check_prime(13)
