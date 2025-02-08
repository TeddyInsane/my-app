import { useState } from 'react';
import Link from 'next/link';

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h1>Toggle Message</h1>
      {isVisible ? <p>Hello, this is a toggled message!  My Name is Paritoshveer SIngh and my Student id is N01709032. I am using this information for my Assignment purpose.</p> : <p>Message is hidden.</p>}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
      <br />
      <Link href="/">Go Back</Link>
    </div>
  );
}
