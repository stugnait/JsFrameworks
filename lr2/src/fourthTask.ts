abstract class Employee {
    constructor(public name: string, public age: number, public salary: number) {}

    abstract getAnnualBonus(): number;
}

interface Payable {
    pay(): void;
}

class Developer extends Employee implements Payable {
    getAnnualBonus(): number {
        return this.salary * 0.1;
    }

    pay(): void {
        console.log(`Paying ${this.name} a salary of ${this.salary}`);
    }
}

class Manager extends Employee implements Payable {
    getAnnualBonus(): number {
        return this.salary * 0.2;
    }

    pay(): void {
        console.log(`Paying ${this.name} a salary of ${this.salary}`);
    }
}

const employees: Employee[] = [
    new Developer('John Doe', 30, 50000),
    new Manager('Jane Smith', 40, 80000),
    new Developer('Alice Johnson', 25, 60000),
    new Manager('Bob Brown', 50, 90000)
];

let totalAnnualBonus = 0;

employees.forEach(employee => {
    totalAnnualBonus += employee.getAnnualBonus();
});

console.log('Загальна річна сума бонусів:', totalAnnualBonus);
