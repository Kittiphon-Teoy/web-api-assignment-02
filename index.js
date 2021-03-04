const express = require('express') //เรียกใช้ express
const app = express()
app.use(express.json()) 

let books = []

app.get('/books',(req,res) => {
  

    res.status(200).json(books)

})
app.get('/books/:id', (req,res) => {
    //input
    let id = req.params.id
    let book = {}
    //process
    book = books[id]
    //output
    res.status(200).json(book)

})


app.post('/books',(req,res) => {
    
    let title = req.body.titlebk
    let price  = req.body.pricebk
    let unit =req.body.unitbk
    let isbn = req.body.isbnbk
    let imageurl = req.body.imageurlbk


    let bookID = 0
   
    
     let newBook = {
        titlebk: title,
        pricebk: price,
        unitbk:unit,
        isbnbk:isbn,
        imageurlbk:imageurl
     }


     
    
    books.push(newBook) 
    bookID = books.length - 1 
   
    res.status(201).json(bookID)
   
})
const port = 3000
app.listen(port, () => console.log(`Server app listening at http://localhost:${port}`))