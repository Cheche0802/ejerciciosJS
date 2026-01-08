
const heroes = ['Batman', 'Auperman', 'Wonderwoma', 'Aquaman'];


console.warn('For Tradicional');

for (let i = 0; i < heroes.length; i++) {
    const element = heroes[i];
    console.log(element);
}

console.warn('for in');

for (const i in heroes) {
    const elements = heroes[i];
    console.log(elements);
}

console.warn('for of');

for (const heroe of heroes) {
    console.log(heroe)
}