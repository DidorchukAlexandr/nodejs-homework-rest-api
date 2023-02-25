const express = require("express");
const { validation, ctrlWrapper } = require("../../middlewares");
const {
  addJoiSchema,
  patchJoiSchema,
  favoriteJoiSchema,
} = require("../../models");
const { contacts: ctrl } = require("../../controllers");
const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAllContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", validation(addJoiSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", ctrlWrapper(ctrl.deleteContactById));

router.put(
  "/:contactId",
  validation(patchJoiSchema),
  ctrlWrapper(ctrl.updateContactById)
);

router.patch(
  "/:contactId/favorite",
  validation(favoriteJoiSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
