const router = require("express").Router();

const BooksController = require("../controllers/BooksController");

router.post("/create", BooksController.create);
router.get("/", BooksController.getAll);
router.get("/:id", BooksController.getById);
router.delete("/:id", BooksController.deleteById);
router.patch("/:id", BooksController.updateById);

module.exports = router;
