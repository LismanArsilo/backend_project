import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router();

router.get("/:id/images/:filename", UploadDownloadHelper.showProductImage);
router.get("/", IndexController.UserSettingController.findAllUser);
router.get("/:id", IndexController.UserSettingController.findOneUser);
router.put(
  "/:id",
  UploadDownloadHelper.uploadSingleFile,
  IndexController.UserSettingController.updateUser
);
router.put(
  "/nofile/:id",
  IndexController.UserSettingController.updateNoFileUser
);
router.put(
  "/password/:id",
  IndexController.UserSettingController.updatePassword
);
export default router;
