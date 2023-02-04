let str = "parap";
for (let i = 0; i < str.length; i++) {
   if (str[i] === str[str.length - i - 1]) {
      console.log("True");
   } else {
      console.log("false");
      break;
   }
}