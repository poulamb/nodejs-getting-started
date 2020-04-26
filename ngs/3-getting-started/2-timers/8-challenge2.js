// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
let c = 0;
let timerId = setInterval(() => {
  console.log("Hello World");
  c += 1;
  if (c == 5) {
    console.log("Done");
    clearInterval(timerId);
  }
}, 1000);
