import '../styles/page.css';

export default function Page1() {
  return (
      <div>
          <h1>JavaScript</h1>
          <p>Следует начать рассмотрение веб-языков, использующих статическую типизацию с JavaScript. В данном языке нет статической типизации, она реализуется с помощью TypeScript или Flow, но поскольку это один из первых веб-языков и ныне действующих следует рассмотреть основные аспекты типизации данного языка.</p>
          <p>JavaScript характеризуется (слабой) динамической типизацией: переменная связывается с типом в момент присваивания значения, а не в момент объявления переменной; в различных участках программы одна и та же переменная может принимать значения разных типов. Типизация в JavaScript также характеризуется как неявная (утиная) – проверка типов выполняется во время выполнения программы. На этапе райнтайма, а не компиляции</p>
          <p>Из-за использования динамической типизации, при приведении типов JavaScript могут получаться неожиданные результаты. Ниже представлен пример приведения типов при использовании математических операций.</p>
          <h2>Пример кода</h2>
          <pre>
              <code>
                  {`1 + '1' // '11'

[] + {} // "[object Object]"

"" + 1 + 0 // "10"

"" - 1 + 0 // -1

true + false // 1
`}
              </code>
          </pre>
          <p>В данном примере наглядно продемонстрировано, как JavaScript обрабатывает операции с разными типами данных с использованием операторов сложения и вычитания. Данный пример показывает слабую типизацию и автоматическое преобразование типов, характерную для JavaScript.</p>
          <p>Динамическая типизация в JavaScript позволяет переменным менять тип данных в зависимости от контекста использования или значения, которое им присваивается. Эта особенность делает JavaScript гибким, но может также привести к ошибкам во время выполнения, если не соблюдать осторожность. </p>
          <p>Рассмотрим несколько примеров кода на JavaScript с использованием динамической типизации.</p>
          <h3>Изменение типа переменной</h3>
          <pre>
              <code>
                  {`let data = "Hello, world!";  // Изначально data имеет тип String
console.log(typeof data);  // Выводит "string"

data = 100;  // Меняем тип переменной на Number
console.log(typeof data);  // Выводит "number"

data = true;  // Меняем тип переменной на Boolean
console.log(typeof data);  // Выводит "boolean"

`}
              </code>
          </pre>
          <p>В этом примере переменная data сначала инициализирована как строка, затем ей присваивается числовое значение, и в конце — булево значение. Тип переменной data динамически меняется в зависимости от присвоенного значения. Использование оператора typeof демонстрирует изменение типа данных переменной.</p>
          <h3>Функция с динамическими типами аргументов</h3>
          <pre>
              <code>
                  {`function processData(data) {
    if (typeof data === 'string') {
        console.log(data.toUpperCase());  // Преобразование строки в верхний регистр
    } else if (typeof data === 'number') {
        console.log(data * 10);  // Умножение числа на 10
    } else {
        console.log("Unsupported data type");
    }
}

processData("hello");  // Выводит "HELLO"
processData(10);       // Выводит 100
processData(true);     // Выводит "Unsupported data type"

`}
              </code>
          </pre>
          <p>В данном примере функция processData принимает один параметр data, тип которого не определён заранее. Функция проверяет тип переданного аргумента и выполняет различные действия в зависимости от этого типа. Это демонстрирует, как можно использовать динамическую типизацию для создания гибких функций, которые адаптируют своё поведение в зависимости от типа входных данных.</p>
          <h3>Конкатенация и автоматическое приведение типов</h3>
          <pre>
              <code>
                  {`let message = "The answer is " + 42;  // "42" преобразуется в строку
console.log(message);  // Выводит "The answer is 42"

let sum = "100" + 50;  // "50" преобразуется в строку
console.log(sum);  // Выводит "10050"

`}
              </code>
          </pre>
          <p>В JavaScript оператор + может служить как для сложения чисел, так и для конкатенации строк. Если один из операндов является строкой, другой операнд автоматически приводится к строке, что приводит к конкатенации, а не к математическому сложению.</p>
      </div>
  );
}
