const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let database = [];

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  database.push(answer);
  rl.question("What's an activity you like doing?", (answer) => {
    database.push(answer);
    rl.question("What do you listen to while doing that?", (answer) => {
      database.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        database.push(answer);
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          database.push(answer);
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            database.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              database.push(answer);
              console.log(`${database[0]} loves listening to ${database[2]} while ${database[1]}, devouring ${database[4]} for ${database[3]}, prefers ${database[5]} over any other sport, and is amazing at ${database[6]}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
