
import { useState } from 'react';
import Link from 'next/link';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <br />
      <Link href="/">Go Back</Link>
    </div>
  );
}
