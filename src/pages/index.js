import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Web App</h1>
      <nav>
        <Link href="/counter">Counter</Link> | 
        <Link href="/toggle"> Toggle Message</Link>
      </nav>
    </div>
  );
}
