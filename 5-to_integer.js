const args = process.argv.slice(2);
const firstArg = args[0];

// Use parseInt to convert to integer
const intVal = parseInt(firstArg);

if (!firstArg || isNaN(intVal)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${intVal}`);
}
