import Calculator from './components/Calculator';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Kalkulator Diskriminan
        </h1>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
