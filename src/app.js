import express from 'express'
import router from './router'
import cors from 'cors'

let app = express()

app.use(express.json())
app.use(cors({ origin: true }))
app.use(express.static('static'))
app.use(router)

app.listen(process.env.PORT || 80)