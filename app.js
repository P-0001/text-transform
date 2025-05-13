import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { fileURLToPath } from 'url'
import cleanText from './src/fix.js'
import splitText from './src/split.js'
import { readFileSync } from 'node:fs'
import { timed } from './src/utils.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = process.env.PORT || 3000
const { version } = JSON.parse(
  readFileSync(path.join(__dirname, 'package.json'), 'utf8')
)
const app = express()
const isDev =
  process.env.NODE_ENV === 'development' && process.platform === 'win32'

// add version to the response header
app.use((req, res, next) => {
  // if NODE_ENV is development, disable caching
  if (isDev) {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate')
  }

  res.setHeader('x-version', version)

  next()
})

// set max body size to 10mb
app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/ping', (req, res) => {
  res.setHeader('x-version', version)
  res.status(200).send('pong')
})

app.get('/', (req, res) => {
  res.render('index', { output: null, version })
})

app.get('/capture', (req, res) => {
  res.render('capture', {  })
})

app.get('/split', (req, res) => {
  res.render('split', { chunks: [], version })
})

app.post('/transform', (req, res) => {
  const timer = timed()
  const { inputText } = req.body
  const { result } = cleanText(inputText)
  console.log(`Time taken: ${timer()}ms`)
  res.render('index', { output: result, version })
})

app.post('/split', (req, res) => {
  const timer = timed()
  const { inputText, wordsPerChunk } = req.body
  const chunks = splitText(inputText, parseInt(wordsPerChunk))
  console.log(`Time taken: ${timer()}ms`)
  res.render('split', { chunks, version })
})

app.post('/api/transform', async (req, res) => {
  const { inputText } = req.body

  if (!req.headers['content-type']?.includes('application/json')) {
    return res
      .status(400)
      .json({ error: 'Content-Type must be application/json' })
  }

  if (!inputText || inputText.length === 0) {
    return res.status(400).json({ error: 'inputText is required' })
  }

  const result = await cleanText(inputText)

  res.json(result)
})



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
