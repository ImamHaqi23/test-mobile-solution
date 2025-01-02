import { useState } from 'react';

function App() {
  const [timeInfo, setTimeInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchTime = async () => {
    setLoading(true);
    setError('');
    setTimeInfo(null);

    try {
      const response = await fetch(
        'https://timeapi.io/api/Time/current/zone?timeZone=Asia/Jakarta'
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTimeInfo(data);
    } catch {
      setError('Error fetching time');
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Cek Waktu Sekarang</h1>
      <button
        onClick={fetchTime}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Cek Waktu
      </button>
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {timeInfo && (
        <div className="mt-4 p-4 border border-gray-300 rounded">
          <h2 className="text-lg font-semibold">Waktu Saat Ini:</h2>
          <p>Tanggal: {timeInfo.date}</p>
          <p>Waktu: {formatTime(timeInfo.dateTime)}</p>
          <p>Zona Waktu: {timeInfo.timeZone}</p>
        </div>
      )}
    </div>
  );
}

export default App;
