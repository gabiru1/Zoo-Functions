const data = require('./data');

const { species, employees, hours, prices } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((animals, i) => animals.id === ids[i]);
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const selectAnimal = species.find((obj) => obj.name === animal);
  return selectAnimal.residents.every((pet) => pet.age >= age);
}

function getEmployeeByName(e) {
  // seu código aqui
  if (arguments.length === 0) return {};
  return employees.find((info) => info.firstName === e || info.lastName === e);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  const manager = [];
  employees.forEach((person) => manager.push(...person.managers));
  return manager.some((people) => people === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  // seu código aqui
  if (arguments.length !== 0) {
    return species.find((animal) => animal.name === specie).residents.length;
  }
  return species.reduce((acc, beast) => {
    acc[beast.name] = beast.residents.length;
    return acc;
  }, {});
}

function calculateEntry(entrants) {
  // seu código aqui
  if (arguments.length === 0) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return (prices.Adult * Adult + prices.Senior * Senior + prices.Child * Child);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
  const getInfoDay = (weekDay, schedules) => {
    if (schedules.open === 0) {
      return { [weekDay]: 'CLOSED' };
    }
    return { [weekDay]: `Open from ${schedules.open}am until ${schedules.close - 12}pm` };
  };
  const allDays = Object.keys(hours).map((key) => getInfoDay(key, hours[key]));
  if (arguments.length === 0) return allDays.reduce((ac, elem) => ({ ...ac, ...elem }), {});
  return getInfoDay(dayName, hours[dayName]);
}
// allDays = [ {dia: {horario}}... ]
// Object[keys] => acessa o valor da chave do objeto

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employ = employees.find((emp) => emp.id === id);
  const fisrt = species.find((bixo) => bixo.id === employ.responsibleFor[0]);
  const oldest = fisrt.residents.sort((a, b) => b.age - a.age);
  return Object.values(oldest[0]);
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
