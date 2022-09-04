import { Router } from "express";
import indexCtrl from "../controller/IndexController";

const router = Router();

router.get("/", indexCtrl.CityController.findAllCity);
router.get("/:id", indexCtrl.CityController.findOneCity);

export default router;
