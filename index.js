const express = require("express");
const app = express();
const BooksRoutes = require("./routes/BooksRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/books", BooksRoutes);


app.listen(3000);
