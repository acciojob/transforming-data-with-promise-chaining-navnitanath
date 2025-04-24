//your JS code here. If required.
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// Utility function to return a promise with delay
function delayedPromise(value, delay) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), delay);
  });
}

button.onclick = function () {
  const num = parseFloat(input.value);

  // Clear any previous output
  output.textContent = "";

  // Start promise chain
  delayedPromise(num, 2000)
    .then(result => {
      output.textContent = `Result: ${result}`;
      return delayedPromise(result * 2, 1000);
    })
    .then(result => {
      output.textContent = `Result: ${result}`;
      return delayedPromise(result - 3, 1000);
    })
    .then(result => {
      output.textContent = `Result: ${result}`;
      return delayedPromise(result / 2, 1000);
    })
    .then(result => {
      output.textContent = `Result: ${result}`;
      return delayedPromise(result + 10, 1000);
    })
    .then(finalResult => {
      output.textContent = `Final Result: ${finalResult}`;
    });
};
