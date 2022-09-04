import { Router } from "express";
import indexCtrl from "../controller/IndexController";

const router = Router();

router.get("/", indexCtrl.UserExperienceController.findAllSuperExperience);
router.get("/:id", indexCtrl.UserExperienceController.findAllExperience);
router.get(
  "/:id/experience/:experience",
  indexCtrl.UserExperienceController.findOneExperience
);
router.post("/", indexCtrl.UserExperienceController.createExperiences);
router.put("/:id", indexCtrl.UserExperienceController.updateExperiences);
router.delete("/:id", indexCtrl.UserExperienceController.deletedExperiences);

export default router;
