import { Router } from "express";
import indexCtrl from "../controller/IndexController";

const router = Router();

router.get("/", indexCtrl.PhoneTypeController.findAllPhoneType);
router.get("/:id", indexCtrl.PhoneTypeController.findOnePhoneType);

export default router;
