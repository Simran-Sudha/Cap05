// Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit 
let start=0;
let end=40;
let sum=0;
while(start<=end){
  if(start%3==0)
    sum=sum+start;
    start++;
}
{console.log(sum);
}
