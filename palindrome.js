//check palindrome
let str ="Naman";
let extrstr=str;
 
let bag= "";
for( let i=str.length-1;i>=0;i--){
  bag=bag+str[i];
}
if(exstr==bag){
console.log("Yes");
}else{
  console.log("No");
}
  



