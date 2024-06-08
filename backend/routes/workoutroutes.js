const express = require('express')
const Workout = require('../models/workoutModel')
const {getallworkouts , postworkout, getsingleworkout, deleteworkout, updateworkout} = require('../controllers/workoutcontroller')
const router = express.Router()

router.get('/' , getallworkouts)

router.get('/:id' , getsingleworkout)

router.post('/' , postworkout)

router.delete('/:id' , deleteworkout)

router.put('/:id' , updateworkout)



module.exports = router