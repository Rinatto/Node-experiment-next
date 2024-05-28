// app/components/Navigation.jsx
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
        <Link href="/">Home</Link>
        <Link href="/page1">Page 1</Link>
        <Link href="/page2">Page 2</Link>
    </nav>
  );
}
