import express from 'express'
import cors from 'cors'

let app = express()

app.use(express.json())
app.use(cors({ origin: true }))
app.use(express.static('static'))

app.listen(80)