const express = require('express')
const router = express.Router()

/**
 * Sample Data
 */
var data = [
    {id: 1, name: 'John Smith', dob: '2000-01-01'},
    {id: 2, name: 'Adam Stanford', dob: '2000-01-02'},
    {id: 3, name: 'Michael Leon', dob: '2000-01-03'}
]

/**
 * Fetch all or search requests
 */
router.get('/', (req, res, next) => {
    let q = req.query.q
    if(q){
        res.json(data.filter(item => item.name.toLowerCase().indexOf(q)>=0 ))
    } else {
        res.json(data)
    }
})

/**
 * get employee by id
 */
router.get('/:id', (req, res, next) => {
    res.json(data.find(item => item.id === parseInt(req.params.id)))
})

/**
 * add a new employee
 */
router.post('/', (req, res, next) => {
    let id = data.reduce((id, item)=>{return id < item.id ? item.id : id}, 0) + 1
    data.push(Object.assign({}, req.body, {id}))
    res.json(true)
})

/**
 * update employee by id
 */
router.put('/:id', (req, res, next) => {
    let item = data.find(item => item.id === parseInt(req.params.id))
    if(item) Object.assign(item, req.body)
    res.json(item)
})

/**
 * delete employee by id
 */
router.delete('/:id', (req, res, next) => {
    data = data.filter(item => item.id !== parseInt(req.params.id))
    res.json(true)
})

module.exports = router
