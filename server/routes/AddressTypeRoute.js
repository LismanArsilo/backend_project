import { Router } from "express";
import indexCtrl from "../controller/IndexController";

const router = Router();

router.get("/", indexCtrl.AddressTypeController.findAllAddressType);
router.get("/:id", indexCtrl.AddressTypeController.findOneAddressType);

export default router;
