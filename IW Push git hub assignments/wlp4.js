// Problem 4: Print the average of even numbers from 1 to 100 (both included)
let sum=0;
let count=0;
let start=1;



while(start<=100){
  if(start%2==0){
    sum=sum+start;
    count++;
  }
  start++;
}
let average=sum/count;
console.log(average);