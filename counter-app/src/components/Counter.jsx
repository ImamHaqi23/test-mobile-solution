import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-700">
        Counter: {count}
      </h1>
      <div className="space-x-4">
        <button
          onClick={increment}
          className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-200"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
