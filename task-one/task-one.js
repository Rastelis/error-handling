document.querySelector("body").innerHTML = ' <div class="wraper"><h4>Write a JavaScript function that takes a number as a parameter and throws a custom \'Error\' if the number is not an integer.</h4></div>'
const input = 5.5

checkIfInteger(input)


function checkIfInteger(input) {
    if (!Number.isInteger(input)) {
        throw new Error('Invalid number. Please input an integer.');
    }
    console.log('Number is valid:', input);
}