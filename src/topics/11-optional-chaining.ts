export interface Passenger {
    name: string;
    children?: string[];
}


const passenger1: Passenger = {
    name: "Sergio"
}
const passenger2: Passenger = {
    name: "María",
    children: ['Natalia', 'Sheila']
}

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(howManyChildren);
    
}
printChildren(passenger1);
