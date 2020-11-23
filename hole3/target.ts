import * as readline from 'readline';

// Extract stdout and stdin as parameters! (Par: 5)

function main(stdin: NodeJS.ReadStream, output: NodeJS.WriteStream) {

  const rl = readline.createInterface({
    input: stdin,
    output: output
  });

  const number = Math.floor((Math.random() * 21) % 21) + 1;
  output.write("Guess a number between 1 and 20!");

  rl.prompt();
  rl.on('line', (input) => {
    if (Number(input) === number) {
      output.write("Congratulations! You guessed it");
      process.exit(0);
    } else {
      output.write("Try again...");
      return rl.prompt();
    }
  })
}

main(process.stdin, process.stdout);
