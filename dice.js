function roll(total) {
    return new Promise((resolve, reject) => {
      let die = Math.floor(Math.random() * 6) + 1;
      console.log(`Rolled a ${die}. Total: ${total + die}`);
      if (die === 1) {
        reject("Game over, you rolled a 1!");
      } else {
        resolve(total + die);
      }
    });
  }
  
  roll(0)
    .then((result) => roll(result))
    .then((result) => roll(result))
    .catch((err) => console.log(err));
  