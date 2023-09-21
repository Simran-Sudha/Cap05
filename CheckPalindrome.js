//Problem 2 : Check whether a string is palindrome or not.
let num="1441";
let str= num.toString();
     let bag="";
for(let i=0;i<str.length;i++){
      bag=bag+str[i];
}
     let bag2="";
for(let i=str.length-1;i>=0;i--){
     bag2=bag2+str[i];
} 
if(bag1==bag2){
    console.log("Yes");
}
else{
    console.log("No");
}
