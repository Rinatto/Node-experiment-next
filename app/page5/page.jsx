// app/page1/page.jsx
import '../styles/page.css';

export default function Page5() {
    return (
        <div>
            <h1>Elm</h1>
            <p>Elm – это функциональный язык программирования для фронтенд разработки, который компилируется в JavaScript. Одна из ключевых особенностей Elm – строгая система статической типизации, которая значительно уменьшает количество возможных ошибок времени выполнения (runtime error).</p>
            <p>Рассмотрим несколько примеров реализации статической типизации в Elm.</p>
            <h3>Объявление типов и переменных</h3>
            <p>В Elm типы переменных указываются явно, что помогает компилятору предотвратить множество ошибок на этапе разработки.</p>
            <pre>
                <code>
                    {`name : String
name = "ChatGPT"

age : Int
age = 3

isActive : Bool
isActive = True`}
                </code>
            </pre>
            <p>В этом примере переменные name, age, и isActive объявляются с явным указанием типов: String, Int, и Bool соответственно.</p>
            <h3>Функции</h3>
            <p>Функции в Elm также типизируются, что позволяет убедиться, что они принимают и возвращают значения ожидаемых типов.</p>
            <pre>
                <code>
                    {`greet : String -> String
greet name =
    "Hello, " ++ name ++ "!"

main =
    text (greet "Alice")`}
                </code>
            </pre>
            <p>Функция greet принимает строку и возвращает строку. Оператор ++ используется для конкатенации строк.</p>
            <h3>Использование пользовательских типов данных</h3>
            <p>Elm позволяет создавать собственные типы данных, что является мощным средством для моделирования сложных структур данных и управления состоянием приложения.</p>
            <pre>
                <code>
                    {`type alias Person = {
    name : String,
    age : Int,
    isActive : Bool
}

describe : Person -> String
describe person =
    person.name ++ " is " ++ String.fromInt(person.age) ++ " years old and active status is " ++ String.fromBool(person.isActive)

charlie : Person
charlie = 
    { name = "Charlie", age = 30, isActive = True }

main =
    text (describe charlie)`}
                </code>
            </pre>
            <p>В этом примере type alias используется для определения типа Person. Затем создается функция describe, которая возвращает описание человека.</p>
        </div>
    );
}