// Date started:    16th June, 2017
// Date completed:  16th June, 2017

var input = process.argv[2];

input = input.replace(/\s/g,'') // Remove spaces
input = input.toLowerCase();

var isPalindrom = true;

for(var i = 0; i < input.length; i++) {
    if(i === (input.length-1)/2) break;
    if(input.charAt(i) !== input.charAt((input.length - 1) - i)) {
        isPalindrom = false;
        break;
    }
}

if(isPalindrom) {
    console.log("Is Palindrom");
} else {
    console.log("Is not palindrom");
}