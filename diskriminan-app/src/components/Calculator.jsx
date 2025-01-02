import { useState } from 'react';

export default function Calculator() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [hasil, setHasil] = useState(null);

  const handleCalculate = () => {
    const nilaiA = parseFloat(a);
    const nilaiB = parseFloat(b);
    const nilaiC = parseFloat(c);

    if (!isNaN(nilaiA) && !isNaN(nilaiB) && !isNaN(nilaiC)) {
      const diskriminan = Math.pow(nilaiB, 2) - 4 * nilaiA * nilaiC;
      setHasil(diskriminan);
    } else {
      setHasil('Input tidak valid');
    }
  };
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="a" className="block text-sm font-medium text-gray-700">
          Nilai a:
        </label>
        <input
          type="number"
          id="a"
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="b" className="block text-sm font-medium text-gray-700">
          Nilai b:
        </label>
        <input
          type="number"
          id="b"
          value={b}
          onChange={(e) => setB(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="c" className="block text-sm font-medium text-gray-700">
          Nilai c:
        </label>
        <input
          type="number"
          id="c"
          value={c}
          onChange={(e) => setC(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Hitung
      </button>

      {hasil !== null && (
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">Hasil Diskriminan:</h2>
          <p className="text-lg font-medium">{hasil}</p>
        </div>
      )}
    </div>
  );
}
