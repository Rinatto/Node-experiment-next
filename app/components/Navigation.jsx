// app/components/Navigation.jsx
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
        <Link href="/">Experiment</Link>
        <Link href="/page1">JavaScript</Link>
        <Link href="/page2">TypeScript</Link>
        <Link href="/page3">Dart</Link>
        <Link href="/page4">Scala</Link>
        <Link href="/page5">Elm</Link>
        <Link href="/page6">PureScript</Link>
        <Link href="/page7">ReScript</Link>
        <Link href="/page8">Flow</Link>
        <Link href="/page9">Сравнение статической типизации в веб-языках</Link>
    </nav>
  );
}
