import express from "express";
import {
  createHalqah,
  getAllHalaqaat,
  getHalqah,
} from "../controllers/halqahController.js";

const router = express.Router();

router.route("/").get(getAllHalaqaat).post(createHalqah);
router.route("/:slug").get(getHalqah);

export default router;
