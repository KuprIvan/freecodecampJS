let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/g; // Change this line
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/g; // Change this line
let result = ohRegex.test(ohStr);let result = ohRegex.test(ohStr);
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
