const router = require("express").Router();

const {
  handleValidateBooks,
  handleValidationErrors,
} = require("../middlewares/validate_books");
const { imageUpload } = require("../middlewares/image_upload");
const BooksController = require("../controllers/BooksController");

router.post(
  "/create",
  imageUpload.single("image"),
  handleValidateBooks(false),
  handleValidationErrors,
  BooksController.create
);

router.get("/", BooksController.getAll);
router.get("/:id", BooksController.getById);
router.delete("/:id", BooksController.deleteById);
router.patch(
  "/edit/:id",
  handleValidateBooks(true),
  handleValidationErrors,
  imageUpload.single("image"),
  BooksController.updateById
);

module.exports = router;
