const readlineSync = require('readline-sync');
const { EOL } = require('os');
const run = require("./runner");

class View {
  constructor(model, name) {
    this.model = model;
    this.name = name;
  }

  run() {
    const Monkeyfalse = "🙈";
    const Monkeytru = "🙉";
    let count = 0;
    for (let i = 0; i < this.model.readAsk().length; i++) {
      const ask = this.model.readAsk()[i];
      let answer = this.model.readAnswers()[i + 1];
      let userName = readlineSync.question(`${EOL}${ask}${EOL}Ответ: `);
      if (typeof userName === "string") {
        userName = userName.toLowerCase();
        answer = answer.toLowerCase();
      }
      if (userName === answer) {
        console.log(`Умничка!!!😊${EOL}${Monkeytru.repeat(20)}`);
        count += 1;
      } else {
        console.log(
          `Правильный ответ: ${
            this.model.readAnswers()[i + 1]
          }${EOL}${Monkeyfalse.repeat(20)}`
        );
      }
      if (i === this.model.readAsk().length - 1) {
        if (count >= 4) {
          console.log(
            `${EOL}${this.name} ты набрал ${count} правильных ответов!`
          );
          console.log("Молодец");
        } else {
          console.log(
            `${EOL}${this.name} - ты набрал ${count} правильных ответов!`
          );
          console.log("В следующий раз будет лучше!");
        }
      }
    }
    const ocen = readlineSync.question("Попрошу оценить мой квиз от 1-10   ");
    const ocen1 = Number(ocen);
    if (ocen1 < 2) {
      console.log("Будем стараться");
    } else if (ocen1 < 5 && ocen1 > 2) {
      console.log("Уже лучше");
    } else if (ocen1 > 5 && ocen1 < 9) {
      console.log("Мы рады!");
    } else if (ocen1 >= 10) {
      console.log("🎆Пушка, гонка!🎆");
    }
  }
}

module.exports = View;