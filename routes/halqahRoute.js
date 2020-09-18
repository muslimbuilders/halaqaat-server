const express = require('express')
const {createHalqah, getAllHalaqaat} = require('../controllers/halqahController')

const router = express.Router();

router.route('/').get(getAllHalaqaat).post(createHalqah)



module.exports = router;