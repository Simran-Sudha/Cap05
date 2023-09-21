//Problem 2 : Given a character in lower case print the upper case character
let bag="";
let char="k";
let lowercase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let uppercase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
for(i=0;i<=lowercase.length-1;i++){
  
  if(char==lowercase[i]){
   bag=bag+uppercase[i];
   }
}
console.log(bag);


