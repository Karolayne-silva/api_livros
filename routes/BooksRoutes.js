const router = require("express").Router();
const {
  validateBooks,
  handleValidationErrors,
} = require("../middlewares/validate_books");
const { imageUpload } = require("../middlewares/image_upload");
const BooksController = require("../controllers/BooksController");

router.post(
  "/create",
  validateBooks,
  handleValidationErrors,
  imageUpload.single("image"),
  BooksController.create
);

router.get("/", BooksController.getAll);
router.get("/:id", BooksController.getById);
router.delete("/:id", BooksController.deleteById);
router.patch(
  "/edit/:id",
  validateBooks,
  handleValidationErrors,
  imageUpload.single("image"),
  BooksController.updateById
);

module.exports = router;
