const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/crawl', async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const images = [];
    $('img').each((index, element) => {
      const imgSrc = $(element).attr('src');
      if (imgSrc) {
        images.push(imgSrc);
      }
    });
    res.json({ images });
  } catch (error) {
    res
      .status(500)
      .json({ error: ' Failed to fetch images from the provided URL' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
