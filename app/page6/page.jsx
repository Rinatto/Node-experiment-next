// app/page1/page.jsx
import '../styles/page.css';

export default function Page6() {
    return (
        <div>
            <h1>PureScript</h1>
            <p>PureScript – это строго типизированный функциональный язык программирования, который компилируется в JavaScript. Язык вдохновлен Haskell и разработан с целью предоставить возможности чистого функционального программирования для веб-разработки. </p>
            <p> PureScript обеспечивает возможности, которые превосходят стандартные возможности JavaScript, включая поддержку сложных типов данных и модулей.</p>
            <p>Рассмотрим несколько примеров реализации статической типизации в PureScript.</p>
            <h3>Определение типов и функций</h3>
            <p>PureScript позволяет явно определять типы для переменных и функций, что улучшает надежность кода и упрощает отладку.</p>
            <pre>
                <code>
                    {`-- Определение типа для описания структуры Person
type Person = {
  name :: String,
  age :: Int
}

-- Функция для создания приветствия для Person
greet :: Person -> String
greet person = "Hello, " <> person.name <> ", you are " <> show person.age <> " years old."
`}
                </code>
            </pre>
            <p>В этом примере:</p>
<p> - Определен пользовательский тип данных Person с помощью записи, содержащей имя и возраст.</p>
<p> - Функция greet принимает Person и возвращает строку, используя информацию из этой структуры.</p>
            <h3>Работа с алгебраическими типами данных (ADT)</h3>
            <p></p>
            <pre>
                <code>
                    {`-- Определение алгебраического типа данных для описания формы
data Shape = Circle Float | Rectangle Float Float

-- Функция для вычисления площади Shape
area :: Shape -> Float
area (Circle radius) = pi * radius * radius
area (Rectangle width height) = width * height`}
                </code>
            </pre>
            <p>В этом примере:</p>
<p> - Shape может быть либо Circle с радиусом, либо Rectangle с шириной и высотой.</p>
<p> - area вычисляет площадь Shape, в зависимости от его конкретного типа (паттерн-матчинг).</p>
            <h3>Интеграция с JavaScript</h3>
            <p>PureScript может взаимодействовать с JavaScript, что позволяет использовать широкий спектр библиотек JavaScript и интегрировать PureScript в существующие проекты.</p>
            <pre>
                <code>
                    {`-- Взаимодействие с функцией JavaScript
foreign import alert :: String -> Effect Unit

-- Вызов JavaScript функции из PureScript
main :: Effect Unit
main = alert "Hello from PureScript!"`}
                </code>
            </pre>
            <p>в данном примере foreign import используется для подключения функции alert из JavaScript, которая затем вызывается в PureScript.</p>
        </div>
    );
}