
/**
 * sleep function
 * Put your milisecond number in parameter
 * @param {Number} ms 
 * @returns 
 */

function jSleep(ms = 5000) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = jSleep