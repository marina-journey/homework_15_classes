const units = [new Unit('Virus', 200, 500)];

console.log(units, units[0].isReadyToMove()); // проверка->работает
console.log(units, units[0].isReadyToFight()); // проверка->работает

units.push(units[0].clone());
console.log(units);

const squad = new Squad(units);
console.log(squad);
console.log(squad.isReadyToMove()); // проверка->работает
console.log(squad.isReadyToFight()); // проверка->работает
console.log(squad.clone() === units); //проверка->работает

