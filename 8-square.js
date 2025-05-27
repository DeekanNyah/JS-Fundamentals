const args = process.argv.slice(2);
const size = parseInt(args[0]);

if (!args[0] || isNaN(size) || size <= 0) {
  console.log("Missing size");
} else {
  let row = 0;
  const line = "X".repeat(size);
  while (row < size) {
    console.log(line);
    row++;
  }
}
