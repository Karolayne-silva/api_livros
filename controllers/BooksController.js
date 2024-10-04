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
      return res
        .status(500)
        .json({ message: "Já existe um livro com esse titulo e descrição" });
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
      return res.status(201).json({ message: "Livro cadastrado com sucesso!" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async getAll(req, res) {
    try {
      const books = await Books.findAll();

      if (books.length > 0) {
        return res
          .status(200)
          .json({ message: "Livros retornados com sucesso!", books });
      }
      return res.status(204).send();
    } catch (err) {
      return res.status(500).json({ message: err.message });
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

      return res
        .status(200)
        .json({ message: "Livro encontrado com sucesso", book });
    } catch (err) {
      return res.status(500).json({ message: err.message });
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

    return res.status(200).json({ message: "Livro excluido com sucesso" });
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
      image,
    } = req.body;

    const book = await Books.findByPk(id);

    if (!book) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }
    const updateData = {};

    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (author !== undefined) updateData.author = author;
    if (reading_year !== undefined) updateData.reading_year = reading_year;
    if (category !== undefined) updateData.category = category;
    if (status !== undefined) updateData.status = status;
    if (review !== undefined) updateData.review = review;
    if (image !== undefined) updateData.image = image;

    await Books.update(updateData, {
      where: {
        id: id,
      },
    });

    return res.status(200).json({ message: "Livro atualizado com sucesso!" });
  }
};
