import * as readline from "readline";
import yargs from "yargs";
const argv = yargs.options({
  queue: {
    describe: "Queue of viruses",
    demandOption: true,
    type: "string",
  },
  N: {
    describe: "Number of iterations",
    demandOption: true,
    type: "number",
  },
}).argv;

// Takes in 2 lines of input, for example:
// C, M, S, H
// 6
// Step 0: C, M, S, H
// Step 1: M, S, H, C, C
// Step 2: S, H, C, C, M, M
// Step 3: H, C, C, M, M, S, S
// Step 4: C, C, M, M, S, S, H, H
// Step 5: C, M, M, S, S, H, H, C, C
// Step 6: M, M, S, S, H, H, C, C, C, C

// Parse Input (2 lines, first is list, second is n)
//     Create Array from Input
//      Store N integer
let virus_queue = argv.queue.split(",");
let n = parseInt(argv.N);

for (let i = 0; i < n; i++) {
  let virus = virus_queue.shift();
  virus_queue.push(virus, virus);
}

console.log(virus_queue[virus_queue.length - 1]);
console.log(virus_queue.join(", "));

// Loop through N times
//      Pop from front
//      Append to back, twice

// print last element in queue
// print all elements in queue
