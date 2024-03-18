let num="hi hello prasad";
let reverse = "";
while (num > 0) {
  console.log(num % 10);
  reverse += num % 10;
  num = parseString(num / 10);
}
convert = parseInt(reverse);
console.log(convert, typeof convert);
