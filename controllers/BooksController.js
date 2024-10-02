const Books = require("../models/Books");

module.exports = class BooksController {

  static async create(req, res) {
    const { title, description, author, publication_year, category } = req.body;

    if (!title) {
      return res.status(422).json;
      ({ error: "Nome é obrigatório" });
    }
    if (!description) {
      return res.status(422).json;
      ({ error: "Descrição é obrigatório" });
    }
    if (!author) {
      return res.status(422).json;
      ({ error: "Autor é obrigatório" });
    }
    if (!publication_year) {
      return res.status(422).json;
      ({ error: "Ano de publicação é obrigatório" });
    }
    if (!category) {
      return res.status(422).json;
      ({ error: "Categoria é obrigatório" });
    }

    const book = {
      title,
      description,
      author,
      publication_year,
      category,
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

      res
        .status(200)
        .json({ message: "Livros retornados com sucesso!", books });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async getById(req, res) {
    const { id } = req.params;
    try {
      const book = await Books.findAll({
        where: {
          id: id,
        },
      });

      if (book.length === 0) {
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
    const { title, description, author, category, publication_year } = req.body;

    const updateData = {};

    if (!title) {
      return res.status(422).json;
      ({ error: "Nome é obrigatório" });
    } else {
      updateData.title = title;
    }
    if (!description) {
      return res.status(422).json;
      ({ error: "Descrição é obrigatório" });
    } else {
      updateData.description = description;
    }

    if (!author) {
      return res.status(422).json;
      ({ error: "Autor é obrigatório" });
    } else {
      updateData.author = author;
    }
    if (!publication_year) {
      return res.status(422).json;
      ({ error: "Ano de publicação é obrigatório" });
    } else {
      updateData.publication_year = publication_year;
    }
    if (!category) {
      return res.status(422).json;
      ({ error: "Categoria é obrigatório" });
    } else {
      updateData.category = category;
    }

   console.log(updateData)
   await Books.update(updateData, {
      where: {
        id: id,
      },
    });

    res.status(200).json({message: "Livro atualizado com sucesso!"});
  }
  
  
};
