const { body, validationResult } = require("express-validator");

const validateBooks = [
  body("description").isEmpty().withMessage("Descrição é obrigatória").trim(),

  body("author").isEmpty().withMessage("Autor é obrigatório").trim(),

  body("category").isEmpty().withMessage("Categoria é obrigatória").trim(),

  body("status").isEmpty().withMessage("Status é obrigatório").trim(),

  body("reading_year").custom((value) => {
    const year = parseInt(value, 10);
    if (year < 1000 || year > new Date().getFullYear()) {
      throw new Error(
        "Ano de publicação deve ser um número entre 1000 e o ano atual"
      );
    }
    return true;
  }),

  body("review").custom((value) => {
    const review = parseInt(value, 10);

    if (Number.isInteger(review) || review < 1 || review > 5) {
      throw new Error("A avaliação deve ser um número entre 1 e 5");
    }
    return true;
  }),
];

const handleValidationErrors = (req, res, next) => {
  console.log(req.body);
  console.log(req.body.title);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => ({
      msg: err.msg,
      path: err.path,
    }));
    return res.status(422).json({ errors: errorMessages });
  }
  next();
};

module.exports = {
  validateBooks,
  handleValidationErrors,
};
