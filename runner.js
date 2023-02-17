const readlineSync = require('readline-sync');
const { EOL } = require('os');
const Model = require('./model');
const View = require('./View');

const userN = readlineSync.question("Друг, как тебя зовут? ");
console.log(`Привет 😊${userN}😊`);

const userName = readlineSync.question(`Выбери тему: Логика Фразы Наука${EOL}`);

const newModel = new Model(userName);
const newView = new View(newModel, userN);
newView.run();