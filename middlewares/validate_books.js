const { check, validationResult } = require("express-validator");

const handleValidateBooks = (isOptional) => {

  const validateBooks = [
    check("title")
      .optional(isOptional)
      .notEmpty()
      .withMessage("Titulo não pode ser vazio"),
    check("description")
      .optional(isOptional)
      .notEmpty()
      .withMessage("Descrição não pode ser vazio"),
    check("author")
      .optional(isOptional)
      .notEmpty()
      .withMessage("Autor não pode ser vazio"),
    check("category")
      .optional(isOptional)
      .notEmpty()
      .withMessage("Categoria não pode ser vazio"),
    check("status")
      .optional(isOptional)
      .notEmpty()
      .withMessage("Status não pode ser vazio"),
  
    check("reading_year")
      .optional(isOptional)
      .custom((value) => {
        const year = parseInt(value, 10);
        if (year < 1000 || year > new Date().getFullYear()) {
          throw new Error(
            "Ano de publicação deve ser um número entre 1000 e o ano atual"
          );
        }
        return true;
      }),
  
    check("review")
      .optional(isOptional)
      .custom((value) => {
        const review = parseInt(value, 10);
  
        if (review < 1 || review > 5) {
          throw new Error("A avaliação deve ser um número entre 1 e 5");
        }
        return true;
      }),
  ];

  return validateBooks;

};

const handleValidationErrors = (req, res, next) => {

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
  handleValidateBooks,
  handleValidationErrors,
};


