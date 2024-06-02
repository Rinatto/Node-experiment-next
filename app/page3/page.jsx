// app/page1/page.jsx
import '../styles/page.css';

export default function Page9() {
    return (
        <div>
            <h1>Dart</h1>
            <p>Dart – это язык программирования, разработанный Google, первоначально предназначенный для создания фронтенд и бэкэнд приложений. </p>
            <p>Dart разрабатывался как язык с динамической типизацией, со временем в него были добавлены возможности статической типизации, поэтому он поддерживает как статическую, так и динамическую типизации. С появлением в языке функции sound null safety, Dart улучшил систему типизации для предотвращения ошибок связанных с null. Данная функция гарантирует, что переменные не могут содержать null, если это не указано явно. </p>
            <p>Рассмотрим несколько примеров реализации статической типизации в Dart.</p>
            <h3>Объявление переменных</h3>
            <pre>
                <code>
                    {`String name = 'Jhon';
int age = 3;
bool isActive = true;`}
                </code>
            </pre>
            <h3>Функции</h3>
            <p>В Dart функции могут быть типизированы как по входным параметрам, так и по возвращаемым значениям.</p>
            <pre>
                <code>
                    {`String greet(String name) {
  return 'Hello, $name!';
}

void main() {
  print(greet('Alice'));  // Вывод: Hello, Alice!
}`}
                </code>
            </pre>
            <h3>Классы</h3>
            <p>Классы в Dart используют статическую типизацию для своих свойств и методов. Это улучшает структурированность кода и предотвратит ошибки во время компиляции.</p>
            <pre>
                <code>
                    {`class Person {
  String name;
  int age;

  Person(this.name, this.age);

  String describe() {
    return '$name is $age years old.';
  }
}

void main() {
  Person person = Person('Charlie', 30);
  print(person.describe());  // Вывод: Charlie is 30 years old.
}`}
                </code>
            </pre>
            <h3>Интерфейсы и абстрактные классы</h3>
            <p>Dart использует абстрактные классы для определения интерфейсов, которые могут быть реализованы другими классами.</p>
            <pre>
                <code>
                    {`abstract class Shape {
  double getArea();
}

class Circle implements Shape {
  final double radius;

  Circle(this.radius);

  @override
  double getArea() {
    return 3.14 * radius * radius;
  }
}

void main() {
  Shape circle = Circle(5);
  print('The area of the circle is ' + circle.getArea().toString());  // Вывод: The area of the circle is 78.5
}`}
                </code>
            </pre>
            <h3>Дженерики</h3>
            <p>Дженерики позволяют создавать компоненты, которые могут работать с разными типами данных.</p>
            <pre>
                <code>
                    {`List<T> addToList<T>(List<T> list, T value) {
  list.add(value);
  return list;
}

void main() {
  List<int> numbers = addToList<int>([], 5);
  List<String> words = addToList<String>([], 'hello');
  print(numbers);  // Вывод: [5]
  print(words);    // Вывод: ['hello']
}`}
                </code>
            </pre>
        </div>
    );
}