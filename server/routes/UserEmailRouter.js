import { Router } from "express";
import indexCtrl from "../controller/IndexController";

const router = Router();

router.get("/", indexCtrl.UserEmailController.findAllSuperEmail);
router.get("/:id", indexCtrl.UserEmailController.findAllEmail);
router.get("/:id/email/:email", indexCtrl.UserEmailController.findOneEmail);
router.post("/", indexCtrl.UserEmailController.createEmail);
router.put("/:id", indexCtrl.UserEmailController.updateEmail);
router.delete("/:id", indexCtrl.UserEmailController.deletedEmail);

export default router;
