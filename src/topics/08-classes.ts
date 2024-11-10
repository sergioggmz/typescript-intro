


export class Person {

    constructor(
        public firstName: string, 
        public lastName: string, 
        private address: string = 'No address'
    ) {
    }
}
// export class Hero extends Person {
//     constructor(public alterEgo: string, private age: number, public realName:string) {
//         super(realName, 'New York');
//     }
// }
export class Hero {
    constructor(
        public alterEgo: string, 
        private age: number, 
        public realName: string, 
        public person: Person
    ) {

    }
}
const person = new Person('Thor', 'Thorcito','Asgard')
const thor = new Hero('Thor', 45, 'Thor Asgard', person);
console.log(thor);
