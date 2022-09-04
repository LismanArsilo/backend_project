import { Router } from "express";
import indexCtrl from "../controller/IndexController";

const router = Router();

router.get("/", indexCtrl.UserSkillController.findAllSkillSuper);
router.get("/:id", indexCtrl.UserSkillController.findAllSkill);
router.get("/:id/skill/:skill", indexCtrl.UserSkillController.findOneSkill);
router.post("/", indexCtrl.UserSkillController.createSkill);
router.delete("/:id", indexCtrl.UserSkillController.deletedSkill);

export default router;
