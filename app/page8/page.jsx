// app/page1/page.jsx
import '../styles/page.css';

export default function Page8() {
    return (
        <div>
            <h1>Flow</h1>
            <p>Flow – это статический анализатор типов для JavaScript, разработанный компанией Facebook. Данный инструмент был разработан для улучшения качества кода в крупных проектах, где используется JavaScript код, путем добавления статической типизации. </p>
            <p>Одной из ключевых особенностей Flow является способность к выводу типов. Это означает, что не всегда необходимо указывать типы данных, во многих случаях Flow самостоятельно определяет их на основе анализа кода. Это упрощает интеграцию Flow в существующие проекты, так как не требует массового добавления типов сразу. Flow разработан так чтобы легко интегрироваться с существующими JavaScript проектами. Он позволяет постепенно добавлять типизацию в проект, не требуя полной переписи кода. </p>
            <p>Flow имеет некоторые сходства с TypeScript, тем что оба предлагают систему типов для JavaScript, но имеются важные различия. Поскольку Flow является только анализатором, он не компилирует код, а только анализирует его, проверяя типы. Изменения в коде проекта требуют дополнительных шагов для сборки, в отличии от TypeScript, который является и анализатором, и компилятором.</p>
            <p>Рассмотрим несколько примеров реализации статической типизации в Flow.</p>
            <h3>Типизация функции</h3>
            <pre>
                <code>
                    {`// @flow
function multiply(x: number, y: number): number {
  return x * y;
}

const result = multiply(10, 'Hello'); // Flow выдаст ошибку, так как 'Hello' не является числом
`}
                </code>
            </pre>
            <p>В этом примере:</p>
<p> - Функция multiply типизирована так, что ожидает два аргумента типа number и возвращает значение типа number.</p>
<p> - Попытка передать строку вместо числа приводит к тому, что Flow выдаст ошибку еще до выполнения кода, что помогает избежать ошибок во время выполнения программы.</p>
            <h3>Типизация массивов и объектов</h3>
            <pre>
                <code>
                    {`// @flow
type User = {
  name: string,
  age: number,
  isActive: boolean
};

function filterActiveUsers(users: Array<User>): Array<User> {
  return users.filter(user => user.isActive);
}

const users = [
  {name: "Alice", age: 25, isActive: true},
  {name: "Bob", age: 30, isActive: false},
  {name: "Charlie", age: 35, isActive: true}
];

const activeUsers = filterActiveUsers(users);
console.log(activeUsers); // Выведет информацию только об активных пользователях
`}
                </code>
            </pre>
            <p>В этом примере:</p>
<p> - Определен тип User для объектов, представляющих пользователей.</p>
<p> - Функция filterActiveUsers аннотирована таким образом, что она принимает и возвращает массив объектов типа User.</p>
            <h3>Обработка возможных ошибок</h3>
            <pre>
                <code>
                    {`// @flow
function divide(x: number, y: number): ?number {
  if (y === 0) {
    return null; // Возвращаем null, если попытка деления на ноль
  }
  return x / y;
}

const result1 = divide(10, 2);
const result2 = divide(10, 0);

console.log(result1); // 5
console.log(result2); // null
`}
                </code>
            </pre>
            <p>В этом примере:</p>
<p> - Функция divide аннотирована типом ?number, что означает, что функция может возвращать number или null.</p>
<p> - Flow обеспечивает проверку, что потребители функции divide учитывают возможность получения null в качестве результата.</p>
            <h3>Типизация обработчиков событий</h3>
            <pre>
                <code>
                    {`// @flow
type MouseEventCallback = (MouseEvent) => void;

function setupClickHandler(element: HTMLElement, callback: MouseEventCallback) {
  element.addEventListener('click', callback);
}

const button = document.getElementById('myButton');

if (button) {
  setupClickHandler(button, (event) => {
    console.log('Button was clicked');
  });
}
`}
                </code>
            </pre>
            <p>В этом примере:</p>
<p> - Определен тип MouseEventCallback для функций обратного вызова, которые обрабатывают события мыши.</p>
<p> - Функция setupClickHandler использует этот тип для обеспечения типовой безопасности обработчиков событий, добавляемых к элементам DOM.</p>
        </div>
    );
}