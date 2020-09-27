const express = require('express')
const {
  createHalqah,
  getAllHalaqaat,
  getHalqah,
} = require("../controllers/halqahController");

const router = express.Router();

router.route("/").get(getAllHalaqaat).post(createHalqah);
router.route("/:slug").get(getHalqah);


module.exports = router;