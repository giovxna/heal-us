import 'dotenv/config';
import express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.get('/', (_req, res) => {
    let html = readFileSync(join(__dirname, 'public', 'index.html'), 'utf8');
    html = html.replace('{{process.env.API_KEY}}', process.env.API_KEY);
    res.send(html);
});

app.use(express.static(join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
