# Book API 📚

Esta é uma API RESTful para gerenciar uma biblioteca de livros. Ela permite que você crie, leia, atualize e exclua informações sobre livros.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL
- Dotenv (para variáveis de ambiente)

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. Clone este repositório:

   ```bash
   git clone https://github.com/Karolayne-silva/api_livros.git
   ```

2. Entre no diretório do projeto:

   ```bash
   cd api_livros
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

   ```bash
   DB_NAME=
   DB_USER=
   DB_PASSWORD=
   DB_HOST=
   ```

5. Inicie o servidor:

   ```bash
   npm start
   ```

A API estará rodando em `http://localhost:3000`.

## Endpoints

### 1. Obter todos os livros

- **Rota**: `GET /books`
- **Descrição**: Retorna uma lista de todos os livros.
- **Resposta**:
  ```json
  [
    {
      "id": 1,
      "title": "O Hobbit",
      "description": "descrição do livro",
      "author": "J.R.R tolkien",
      "category": "Fantasia",
      "image": "algumaimg.jpg",
      "review": 2,
      "reading_year": 2010,
      "status": "lendo"
    }
  ]
  ```

### 2. Obter um livro pelo ID

- **Rota**: `GET /books/:id`
- **Descrição**: Retorna um único livro com base no ID fornecido.
- **Resposta**:
  ```json
  {
            "id": 1,
            "title": "O Hobbit",
            "description": "descrição do livro",
            "author": "J.R.R tolkien",
            "category": "Fantasia",
            "image": "algumaimg.jpg",
            "review": 2,
            "reading_year": 2010,
            "status": "lendo",
        },
  ```

### 3. Adicionar um novo livro

- **Rota**: `POST /books/create`
- **Descrição**: Adiciona um novo livro à biblioteca.
- **Corpo da Requisição**:
  ```json
  {
    "title": "O Senhor dos Anéis",
    "author": "J.R.R. Tolkien",
    "year": 1954
  }
  ```
- **Resposta**:
  ```json
  {
    "message": "Livro cadastrado com sucesso!"
  }
  ```

### 4. Atualizar um livro

- **Rota**: `PATCH /books/edit/:id`
- **Descrição**: Atualiza as informações de um livro existente.
- **Corpo da Requisição**:
  ```json
   {
           
            "review": 4,
            "reading_year": 2012,
            "status": "lido",
        },
  ```
- **Resposta**:
  ```json
  {
    "message": "Livro atualizado com sucesso!"
  }
  ```

### 5. Excluir um livro

- **Rota**: `DELETE /books/:id`
- **Descrição**: Exclui um livro da biblioteca.
- **Resposta**:
  ```json
  {
    "message": "Livro excluído com sucesso!"
  }
  ```

