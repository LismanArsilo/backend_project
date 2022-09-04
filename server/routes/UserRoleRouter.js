import { Router } from "express";
import indexCtrl from "../controller/IndexController";

const router = Router();

router.get("/", indexCtrl.UserRoleController.findAllSuper);
router.get("/:id", indexCtrl.UserRoleController.findOneRole);

export default router;
