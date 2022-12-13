//Write a func,on called stringifyNumbers which takes in an object and finds all of the values
//which are numbers and converts them to strings.
//Recursion would be a great way to solve this task.

function stringifyNumbers(obj) {
  // we initialise an object e.g. newObj = {}
  let newObj = {};
  // iterate over key in obj e.g. for (let key in obj)
  for (let key in obj) {
    // check the key inside object is equal to a number, e.g. typeof
    if (typeof obj[key] === "number") {
      // newObj[key] = obj[key].toString();
      newObj[key] = obj[key].toString();
      // else if typeof obj[key] is an 'object' and && !Array.isArray(obj[key]))
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      // call recursively stringifyNumbers(obj[key])
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
    // finally return newObj
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
console.log(stringifyNumbers(obj));
