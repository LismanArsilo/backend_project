import { Router } from "express";
import indexCtrl from "../controller/IndexController";

const router = Router();

router.get("/", indexCtrl.UserEducationController.findAllSuperEducation);
router.get("/:id", indexCtrl.UserEducationController.findAllEducation);
router.get(
  "/:id/education/:education",
  indexCtrl.UserEducationController.findOneEducation
);
router.post("/", indexCtrl.UserEducationController.createEducation);
router.put("/:id", indexCtrl.UserEducationController.updateEducation);
router.delete("/:id", indexCtrl.UserEducationController.deletedEducation);

export default router;
