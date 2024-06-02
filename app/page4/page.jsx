// app/page1/page.jsx
import '../styles/page.css';

export default function Page4() {
    return (
        <div>
            <h1>Scala</h1>
            <p>Scala – это язык программирования, поддерживающий как объектно-ориентированное, так и функциональное программирование. Данный язык программирования позволяет писать Scala-код, компилируемый в JavaScript. </p>
            <p>Scala, как язык программирования, стал известен благодаря своей сильной статической типизации и расширенными возможностями по обработке данных.</p>
            <p>Рассмотрим несколько примеров реализации статической типизации в Scala.</p>
            <h3>Объявление переменных</h3>
            <p>В Scala типы переменных обычно указываются явно, хотя компилятор часто может выводить их самостоятельно.</p>
            <pre>
                <code>
                    {`val name: String = "Jhon"
val age: Int = 3
val isActive: Boolean = true`}
                </code>
            </pre>
            <h3>Функции</h3>
            <p>Функции в Scala могут указывать типы своих параметров и возвращаемого значения.</p>
            <pre>
                <code>
                    {`def greet(name: String): String = {
  s"Hello, $name!"
}

println(greet("Alice"))  // Выводит: Hello, Alice!`}
                </code>
            </pre>
            <h3>Классы и трейты</h3>
            <p>Scala использует классы и трейты (аналог интерфейсов с возможностью реализации методов) для определения структур данных и поведения.</p>
            <pre>
                <code>
                    {`trait Person {
  def name: String
  def age: Int
  def describe: String = s"$name is $age years old."
}

class Employee(val name: String, val age: Int, val position: String) extends Person {
  override def describe: String = s"$name is $age years old and works as a $position."
}

val employee = new Employee("Charlie", 30, "Engineer")
println(employee.describe)  // Выводит: Charlie is 30 years old and works as a Engineer.
`}
                </code>
            </pre>
            <h3>Case классы</h3>
            <p>Case классы в Scala автоматически поддерживают шаблоны для неизменяемых данных и обеспечивают встроенные методы для сравнения объектов, создания копий и других операций.</p>
            <pre>
                <code>
                    {`case class Book(title: String, author: String)

val book = Book("1984", "George Orwell")
println(book)  // Выводит: Book(1984, George Orwell)`}
                </code>
            </pre>
            <h3>Дженерики</h3>
            <p>Scala поддерживает дженерики, позволяющие создавать классы, функции и трейты, работающие с данными любого типа.</p>
            <pre>
                <code>
                    {`class Stack[T] {
  private var elements: List[T] = Nil
  def push(element: T): Unit = {
    elements = element :: elements
  }
  def pop(): T = {
    val currentTop = elements.head
    elements = elements.tail
    currentTop
  }
}

val stack = new Stack[Int]
stack.push(1)
stack.push(2)
println(stack.pop())  // Выводит: 2
println(stack.pop())  // Выводит: 1`}
                </code>
            </pre>
        </div>
    );
}