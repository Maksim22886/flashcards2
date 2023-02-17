const fs = require('fs');
const { EOL } = require("os"); // делаем перенос строки

class Model {
  // создаем класс
  constructor(topic) {
    // в конструкторе создаем топики
    this.topic = topic;
    // this.otvet = otvet;
  }

  readAsk() {
    const ask = fs.readFileSync(
      `${__dirname}/topics/${this.topic}.txt`,
      "utf-8"
    );
    const arrAsk = ask.split(EOL);
    const arrQuestion = arrAsk.filter((el, index) => index % 2 === 1);
    return arrQuestion;
  }

  readAnswers() {
    const answer = fs.readFileSync(
      `${__dirname}/topics/${this.topic}.txt`,
      "utf-8"
    );
    const arrAnswer = answer.split(EOL);
    const arrAns = arrAnswer.filter((el, index) => index % 2 === 0);
    return arrAns;
  }

  // readotvet() {
  //   const otvet = fs.readFileSync(`${__dirname}/topics/ответы.txt`);

  // }
}

module.exports = Model;
