const Books = require("../models/Books");

module.exports = class BooksController {
  static async create(req, res) {

    const {
      title,
      description,
      author,
      reading_year,
      category,
      status,
      review,
    } = req.body;

    let image = "";

    const existingBook = await Books.findOne({
      where: {
        title,
        description,
      },
    });

    if (req.file) {
      image = req.file.filename;
    }

    if (existingBook) {
      return res.status(500).json({ message: "Já existe um livro com esse titulo e descrição" });
    }

    const book = {
      title,
      description,
      author,
      reading_year,
      category,
      status,
      review,
      image,
    };

    try {
      await Books.create(book);
      res.status(201).json({ message: "Livro cadastrado com sucesso!" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async getAll(req, res) {
    try {
      const books = await Books.findAll();

      if (books.length > 0) {
        res
          .status(200)
          .json({ message: "Livros retornados com sucesso!", books });
      }
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async getById(req, res) {
    const { id } = req.params;
    try {
      const book = await Books.findOne({
        where: {
          id: id,
        },
      });

      if (!book) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }

      res.status(200).json({ message: "Livro encontrado com sucesso", book });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async deleteById(req, res) {
    const { id } = req.params;

    const book = await Books.destroy({
      where: {
        id: id,
      },
    });

    if (book <= 0) {
      return res.status(422).json({ message: "Livro não encontrado" });
    }

    res.status(200).json({ message: "Livro deletado com sucesso" });
  }

  static async updateById(req, res) {
    const { id } = req.params;
    const {
      title,
      description,
      author,
      reading_year,
      category,
      status,
      review,
    } = req.body;

    const updateData = {
      title,
      description,
      author,
      reading_year,
      category,
      status,
      review,
      image,
    };

    console.log(updateData);
    await Books.update(updateData, {
      where: {
        id: id,
      },
    });

    res.status(200).json({ message: "Livro atualizado com sucesso!" });
  }
};
