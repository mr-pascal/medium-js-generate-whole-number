/**
* Returns a random integer between min (inclusive) and max (inclusive).
* @param {number} min  The minimum value
* @param {number} max  The maximum value
* @return {number} The random integer
*/
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(0, 10));
/*
  Output (e.g.): 
  3
*/