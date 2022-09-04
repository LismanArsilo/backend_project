import { Router } from "express";
import indexCtrl from "../controller/IndexController";

const router = Router();

router.get("/", indexCtrl.LineAddressController.findAllLineAddress);
router.get("/:id", indexCtrl.LineAddressController.findOneLineAddress);

export default router;
