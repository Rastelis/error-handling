document.querySelector("body").innerHTML = '<div class="wraper"><h4>\
Write a JavaScript program that uses a try-catch block to catch and handle a \'TypeError\' when accessing a property of an undefined object.\
</h4></div>\
<div><a href="../index.html">Home</a></div>';
try {
    const undefinedObject = undefined;
    console.log(undefinedObject.property);
} catch (error) {
    if (error instanceof TypeError) {
        console.log('Error: Property access to undefined object');
    }
    else {
        throw error
    }
}