import express from 'express';
import path, { dirname } from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(__dirname));

app.get('/join/:tripId', (req, res) => {
  res.sendFile(path.join(__dirname, 'trip-join.html'));
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'join-page', ts: new Date().toISOString() });
});

export default app;

// Start the server only when executed directly (not when imported)
if (process.argv[1] === __filename) {
  app.listen(PORT, () => {
    console.log(`Join page server running at http://localhost:${PORT}`);
  });
}
