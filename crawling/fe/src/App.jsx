import { useState } from 'react';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;

  const handleRun = async () => {
    setLoading(true);
    setError(null);
    setImages([]);
    setCurrentPage(1);

    try {
      const response = await axios.get(
        `http://localhost:5000/crawl?url=${url}`
      );
      setImages(response.data.images);
    } catch {
      setError('Failed to fetch images. Please check the URL or try again.');
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-5">Image Crawler</h1>
      <div className="w-3/4 max-w-lg">
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded mb-3"
        />
        <button
          onClick={handleRun}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Running...' : 'Run'}
        </button>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {currentImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Crawled ${index}`}
            className="w-full h-48 object-cover rounded shadow"
          />
        ))}
      </div>
      {images.length > imagesPerPage && (
        <div className="mt-5 flex justify-center items-center space-x-4">
          <button
            onClick={handlePrevPage}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
