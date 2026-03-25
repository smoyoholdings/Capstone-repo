import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Home Page 🏠</h1>
      <p>Clicks: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default Home;