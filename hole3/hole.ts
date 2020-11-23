import * as readline from 'readline';

// Extract input and output as parameters! (Par: TODO)

function main() {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const number = Math.floor((Math.random() * 21) % 21) + 1;
  process.stdout.write("Guess a number between 1 and 20!");

  rl.prompt();
  rl.on('line', (input) => {
    if (Number(input) === number) {
      process.stdout.write("Congratulations! You guessed it");
      process.exit(0);
    } else {
      process.stdout.write("Try again...");
      return rl.prompt();
    }
  })
}

main();
