const Book = require('../model/books');

const getallBooks = async (req, res, next) => {
    let books;
    try{
        books = await Book.find();
    }catch(err){
        console.log(err);
    }
    
    if(!books){
        return res.status(404).json({message: "No books found"});
    }
    else{
        return res.status(200).json({books});
    }

};

const addBook = async (req, res, next) => {
    const {name, author, price, description, publication, available, image} = req.body;

    let book;
    try{
        book = new Book({
            name,
            author,
            price,
            description,
            publication,
            available,
            image
        });

        await book.save();
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(500).json({message: "Unable to add book"});
    }
    else{
        return res.status(201).json({book});
    }

}    

const getbyid = async (req, res, next) => {
    const id = req.params.id;

    let book;
    try{
        book = await Book.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message: "Unable to find book"});
    }
    else{
        return res.status(200).json({book});
    }

};

const updateBook = async (req, res, next) => {

    const id = req.params.id;

    const {name, author, price, description, publication, available, image} = req.body;

    let book;

    try{
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            price,
            description,
            publication,
            available,
            image
        });
        book = await book.save();
    }catch (err){
        console.log(err);
    }

    if(!book){
        return res.status(404).json({message: "Unable to update book"});
    }
    else{
        return res.status(200).json({book});
    }
};

const deleteBook = async (req, res, next) => {

    const id = req.params.id;

    let book;

    try{
        book = await Book.findByIdAndDelete(id);
    }catch (err){
        console.log(err);
    }

    if(!book){
        return res.status(404).json({message: "Unable to delete book"});
    }
    else{
        return res.status(200).json({message: "Book deleted successfully"});
    }
};


exports.getallBooks = getallBooks;
exports.addBook = addBook;
exports.getbyid = getbyid;  
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;