

function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}


// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiPlyResult: number = multiply(5)
// console.log({result,result2 ,multiPlyResult});

interface Character {
    name: string;
    lf: number;
    showHp: () => void;
}

const healthCharacter = (character: Character, amount: number) => {
    character.lf += amount;
}

const strider: Character = {
    name: 'Strider',
    lf: 50,
    showHp() {
        console.log(`Puntos de vida ${this.lf}`)
    }
}
healthCharacter(strider, 10);
strider.showHp();







