//Problem 3: Use the same function to print Non-Primes from 2 to a given limit

function checkprime(num){
  let count=0;
  for(let i=1;i<=num;i++){
    if(num%i==0) {
      count++;
    }
  }
    if(count==2){
      return true;
    }
   else{
      return false;
    }

  }

let limit=20;
for(let i=2;i<=limit;i++){
  if(checkprime(i)==false){
    console.log(i);
  }
}