const result = require("../factorial/index.js");
const final = require("../ratio/index.js");

const ratioAndFactorial = (a = 4, b = 8, c = 4) => {
  const ratio = final(a, b);
  const factorial = result(c);
  //   console.log(output);
  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
