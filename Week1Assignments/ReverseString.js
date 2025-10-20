let n = "Hello"
let rev = " "
let reverse = n.split(' ').reverse().join("")
console.log(reverse)

for(let i = reverse.length-1; i>0; i--){

    rev = rev+ reverse[i]
}

console.log("Reverse String: "+" " +rev)

switch(true){

    case rev == n:
         console.log("String is a Palindrome!")
         break;

    case rev!=n:
         console.log("string is not a Palindrome!")
         break;

    default:
         break;
}
