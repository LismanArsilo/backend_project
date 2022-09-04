import { Router } from "express";
import indexCtrl from "../controller/IndexController";

const router = Router();

router.get("/", indexCtrl.UserAddressController.findAllSuperAddress);
router.get("/:id", indexCtrl.UserAddressController.findAllAddress);
router.get(
  "/:id/address/:address",
  indexCtrl.UserAddressController.findOneAddress
);
router.post(
  "/",
  indexCtrl.UserAddressController.createAddress,
  indexCtrl.UserAddressController.createUserAddress
);
router.put(
  "/:id",
  indexCtrl.UserAddressController.updateAddress,
  indexCtrl.UserAddressController.updateUserAddress
);
router.delete(
  "/:id",
  indexCtrl.UserAddressController.deletedAddress,
  indexCtrl.UserAddressController.deletedUserAddress
);

export default router;
