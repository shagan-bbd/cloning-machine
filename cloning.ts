let virus_string = "C, M, S, H";

let virus_queue: string[] = virus_string.split(", ");
let n: string = "5";
let N = parseInt(n);

for (let i = 0; i < N; i++) {
  let virus: string = virus_queue[0];
  virus_queue.shift();
  virus_queue.push(virus, virus);
}

console.log(virus_queue[virus_queue.length - 1]);
console.log(virus_queue.join(", "));
