// complete the following functions to make our programwork!

/**
 * Takes a F number and returns the number to C
 * @param {string}fathren tempurature in degrees F
 * @returns{number} the number of defrees C
 */
function convertToCelsius(fahren) {
  let celc = (fahren - 32)  * ( 5 / 9 );
  return celc;
}

/**
 * Takes both numberd (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart 
 * 
 *   Temp            Feels
 * -----------|--------------
 *   < 32     |     "very cold"
 *   < 64     |     "cold"
 *   < 86     |     "warm"
 *   < 100    |     "Hot"
 * 
 *  @param {number} fahren
 *  @param {number} celc
 */
function createMessage(fahren, celc) {
    if ( fahren < 32){
        return ("very cold")

    } else if ( fahren < 64) {
        return ("cold")

    } else if ( fahren < 86) {
        return ("warm")

    } else if (fahren < 100) {
        return ("hot")
}
   
 }


/**
 * Takes a number and returns a ramdom integer from 0 to the limit
 * @param { number} limit
 * @returns { number} a number between 0 and the int passed in 
 */
function rand( limit) {}
