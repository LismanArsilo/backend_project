import { Router } from "express";
import indexCtrl from "../controller/IndexController";

const router = Router();

router.get("/", indexCtrl.RolesController.findAllRoles);
router.get("/:id", indexCtrl.RolesController.findOneRoles);

export default router;
