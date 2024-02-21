document.querySelector("body").innerHTML = '<div class="wraper"><h4>\
Write a JavaScript function that accepts two numbers as parameters and throws a custom \'Error\' if the second number is zero.\
</h4></div>\
<div><a href="../index.html">Home</a></div>';

const input_1 = 1;
const input_2 = 2;

console.log(division(1,2))
console.log(division(5,3))

function division(input_1,input_2) {
    if(input_2===0) {
        throw new Error ("invalid input 2. input  2 canot be 0")
    }
    return input_1/input_2;
    
}
