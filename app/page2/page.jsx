// app/page1/page.jsx
import '../styles/page.css';

export default function Page2() {
    return (
        <div>
            <h1>TypeScript</h1>
            <p>TypeScript разработан как строго типизированное надмножество JavaScript. Из этого следует, что любой валидный JavaScript код также является действительным TypeScript кодом. TypeScript добавляет возможность явного определения типов через аннотации типов.</p>
            <p>Рассмотрим несколько примеров кода на TypeScript с использованием статической типизации.</p>
            
            <h3>Объявление переменных</h3>
            <p>В TypeScript типы данных можно явно указывать при объявлении переменных. Это помогает улучшить читаемость кода и предотвращает ошибки, связанные с неправильным использованием типов.</p>
            <pre>
                <code>
                    {`let username: string = "Jhon";

let userAge: number = 3;

let isActive: boolean = true;`}
                </code>
            </pre>
            <h3>Функции</h3>
            <p>Функции в TypeScript могут иметь типизированные параметры и возвращаемые значения. Это обеспечивает строгость и предсказуемость поведения функций.</p>
            <pre>
                <code>
                    {`function greet(name: string): string {
    return "Hello, " + name + "!";
}

const greeting: string = greet("Alice");`}
                </code>
            </pre>
            <h3>Интерфейсы</h3>
            <p>Интерфейсы в TypeScript позволяют определять структуры для объектов, гарантируя, что они соответствуют определенной форме.</p>
            <pre>
                <code>
                    {`interface User {
    name: string;
    age: number;
    isActive?: boolean; // Необязательное поле
}

const user: User = {
    name: "Bob",
    age: 25,
    isActive: false
};`}
                </code>
            </pre>
            <h2>Классы</h2>
            <p>Классы в TypeScript могут использовать типизацию как для своих свойств, так и для методов. Это обеспечивает ясность структуры объектов и поведения.</p>
            <pre>
                <code>
                    {`class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    describe(): string {
        return this.name + " is " + this.age + " years old.";
    }
}

const person = new Person("Charlie", 30);
console.log(person.describe());
`}
                </code>
            </pre>
            <h3>Дженерики</h3>
            <p>Дженерики позволяют создавать компоненты, которые могут работать с любым типом данных. Это полезно для создания универсальных функций, классов или интерфейсов.</p>
            <pre>
                <code>
                    {`function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let numberArray = getArray<number>([1, 2, 3, 4]);
let stringArray = getArray<string>(["hello", "world"]);`}
                </code>
            </pre>
        </div>
    );
}
