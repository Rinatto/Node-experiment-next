class Animal {
    constructor(name) {
        this.name = name;
        this.newProperty = undefined;  // Инициализируем свойство, но не присваиваем ему значение
    }
}

function testDynamicStructureChange() {
    console.time("Dynamic Structure Change");

    let animals = [];
    for (let i = 0; i < 100000; i++) {
        let animal = new Animal("Animal " + i);
        animals.push(animal);
        if (i % 10 === 0) {
            animal.newProperty = i;  // Динамически добавляем новое свойство
        }
    }

    console.timeEnd("Dynamic Structure Change");
}
testDynamicStructureChange()
module.exports = { testDynamicStructureChange }; 
