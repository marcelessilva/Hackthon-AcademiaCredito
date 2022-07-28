import express from "express"
import path from "path"
import sheet from "./sheet.js"

import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/../index.html'));
});

app.get('/cadastro', function(req, res) {
    const data = req.query
    sheet.appendToSheet(data)
    res.send('ok')
}) 
