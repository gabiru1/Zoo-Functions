const data = require('./data');
// desestruturação do data.js
const { species, employees, hours, prices } = data;

function getSpeciesByIds(...ids) { // Permite representar um numero indefinido de argumentos
  // seu código aqui
  return species.filter((animals, i) => animals.id === ids[i]); // retorna nenhum, um ou varios animais referentes ao id do parametro dentro de um array
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const selectAnimal = species.find((obj) => obj.name === animal); // armazena o objeto do id informado em uma constante
  return selectAnimal.residents.every((pet) => pet.age >= age); // true se todos sao, false se ao menos 1 nao eh
}

function getEmployeeByName(e) {
  // seu código aqui
  if (arguments.length === 0) return {};
  return employees.find((info) => info.firstName === e || info.lastName === e); // retorna o funcionario cujo firstName || lastName batem com o argumento do parametro
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo, // espalha os argumentos dentro do objeto usando spread
    ...associatedWith,
  };
}

function isManager(id) { // confere se id é manager
  // seu código aqui
  const manager = [];
  employees.forEach((person) => manager.push(...person.managers)); // colocar no array manager o person.managers para cada pessoa do array employees
  return manager.some((people) => people === id); // retorna boolean
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) { // define o start do parametro como array
  // seu código aqui
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  // seu código aqui
  if (arguments.length !== 0) {
    return species.find((animal) => animal.name === specie).residents.length; // retorna a quantidade de animais da especia passada no parametro
  }
  return species.reduce((acc, beast) => {
    acc[beast.name] = beast.residents.length; // acc[beast.name] => Object[key] = value
    return acc;
  }, {});
}

function calculateEntry(entrants) {
  // seu código aqui
  if (arguments.length === 0) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants; // desestrutura e atribui no parametro
  return (prices.Adult * Adult + prices.Senior * Senior + prices.Child * Child); // matematica basica para atribuir os valores
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
  const getInfoDay = (weekDay, schedules) => { // criei uma funcao com templates para utilizar
    if (schedules.open === 0) {
      return { [weekDay]: 'CLOSED' }; // os couchetes são necessarios para receber o parametro como nome da chave do objeto
    }
    return { [weekDay]: `Open from ${schedules.open}am until ${schedules.close - 12}pm` }; // template que retorna o dia e o horario especifico
  };
  const allDays = Object.keys(hours).map((key) => getInfoDay(key, hours[key])); // cria uma constante que recebe um array de objetos com o template da linha 70
  if (arguments.length === 0) return allDays.reduce((ac, elem) => ({ ...ac, ...elem }), {}); // sem argumento retorna todos os horarios
  return getInfoDay(dayName, hours[dayName]); // o reduce captura todos os dias e horarios por meio do acumulador e o elemento
}
// allDays = [ {dia: horario... ]
// Object.keys => acessa o valor da chave do objeto

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employ = employees.find((emp) => emp.id === id); // procura e captura o funcionario informado no parametro
  const fisrt = species.find((bixo) => bixo.id === employ.responsibleFor[0]); // procura e captura a primeira especie do array de responsabilidades dentro do objeto funcionario
  const oldest = fisrt.residents.sort((a, b) => b.age - a.age); // organiza na ordem decrescente pela idade para poder retornar o primeiro
  return Object.values(oldest[0]); // retorna o primeiro, no caso o mais velho
}

function increasePrices(percentage) {
  // seu código aqui
  prices.Adult = Math.round(prices.Adult * (1 + percentage / 100) * 100) / 100;
  prices.Senior = Math.round(prices.Senior * (1 + percentage / 100) * 100) / 100;
  prices.Child = Math.round(prices.Child * (1 + percentage / 100) * 100) / 100;
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
