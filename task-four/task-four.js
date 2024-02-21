document.querySelector("body").innerHTML = '<div class="wraper"><h4>\
Write a JavaScript function that takes a number as a parameter and throws a custom \'Error\' if the number is negative.\
</h4></div>\
<div><a href="../index.html">Home</a></div>';

numbercalculator(-8)
function numbercalculator (input) {
    if(input<0) {
        throw new Error ("Invalid input. Input canot be negative")
    }
    return console.log(input);
}