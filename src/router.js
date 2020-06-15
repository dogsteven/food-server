import express from 'express'
let router = express.Router()

router.get('/:name', (req, res) => {
    res.json({
        name: req.params.name
    })
})

export default router