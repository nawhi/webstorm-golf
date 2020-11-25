import * as readline from 'readline';

function main(stdin: NodeJS.ReadStream, stdout: NodeJS.WriteStream) {

  const rl = readline.createInterface({
    input: stdin,
    output: stdout
  });

  const number = Math.floor((Math.random() * 21) % 21) + 1;
  stdout.write("Guess a number between 1 and 20!");

  rl.prompt();
  rl.on('line', (input) => {
    if (Number(input) === number) {
      stdout.write("Congratulations! You guessed it");
      process.exit(0);
    } else {
      stdout.write("Try again...");
      return rl.prompt();
    }
  })
}

main(process.stdin, process.stdout);
