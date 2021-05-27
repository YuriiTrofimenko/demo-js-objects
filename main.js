/* const person = {
    'name': 'Noname',
    'age': 20
} */

/* function Person(name, age) {
    if (!new.target) {
        return new Person(name, age)
    }
    this.name = name
    this.age = age
} */

// const person = Person('Noname', 20)
/* const person = new Person('Noname', 20)

const employee = person
employee.salary = 30000 */

/* employee.print = () => {
    console.log(this)
} */

/* employee.print = function () {
    console.log(this)
}

employee.print() */

// console.log(employee)

/* function foo () {
    console.log(this)
}

foo() */

/* const person = {
    'name': 'Noname',
    'age': 20
}

const employee = {
    'name': 'Bill Gates',
    'age': 65,
    'salary': 10000000
}

function print (dateString) {
    if (dateString) {
        console.log(dateString)
    } else {
        console.log(new Date().toISOString())
    }
    console.log(this)
} */


// print.bind(person)()

// const printEmployee = print.bind(employee)
// const printEmployee = print.bind(employee, '2021-01-25')
// ...
// printEmployee()

// employee.print = print
// employee.print()

// print.call(employee, '2021-01-25')
// print.apply(person, ['2021-01-25'])

/* const person = {
    'name': 'Noname',
    'age': 20
}

const employee = Object.assign({'salary': 10000000}, person)
// const employee = person
// employee.salary = 10000000
employee.name = 'Bill Gates'
employee.age = 65
console.log(employee)
console.log(person) */
const obj = {}
console.log(obj.__proto__)

/* let newObject1 = Object.create(прототип)
newObject1.hasOwnProperty("prop1")
Object.freeze(newObject1)
Object.create(null) */

/* Создать при помощи литералов объектов (фигурных скобок)
иерархию объектов:
- уровень наследования 1 - Person (name, age)
- уровень наследования 2
	- Employee = Person + (salary)
	- Customer = Person + (accountBalance, discountPercent)
- уровень наследования 3 - Director = Employee + (bonus)
Создать массив из 4 элементов, по одному каждого типа,
отсортировать универсальной функцией сортировки,
разработанной в прошлом задании,
так, чтобы упорядочение элементов массива было по значениям name
в алфавитном порядке. */