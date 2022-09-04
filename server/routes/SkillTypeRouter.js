import { Router } from "express";
import indexCtrl from "../controller/IndexController";

const router = Router();

router.get("/", indexCtrl.SkillTypeController.findAllSkillType);

export default router;
