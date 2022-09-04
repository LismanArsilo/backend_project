import { Router } from "express";
import indexCtrl from "../controller/IndexController";

const router = Router();

router.get("/", indexCtrl.UserPhoneController.findAllPhoneSuper);
router.get("/:id", indexCtrl.UserPhoneController.findAllPhone);
router.get("/:id/phone/:phone", indexCtrl.UserPhoneController.findOnePhone);
router.post("/", indexCtrl.UserPhoneController.createPhone);
router.put("/:id", indexCtrl.UserPhoneController.updatePhone);
router.delete("/:id", indexCtrl.UserPhoneController.deletedPhone);

export default router;
