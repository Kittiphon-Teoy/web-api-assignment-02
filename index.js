const express = require('express') //เรียกใช้ express
const app = express()
app.use(express.json())
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://SuperAdmin:d961d955*@cluster0.zgoyb.mongodb.net/book?retryWrites=true&w=majority'
const client = new MongoClient(url, { useNewUrlParser: true ,useUnifiedTopology: true}); 

let books = []
let db,booksCollection
//connect
async function connect() {
    await client.connect()
     db=client.db('book')
     booksCollection = db.collection('books')
}
connect()

app.get('/books', async (req,res) => {
  

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


     const result = await booksCollection.insertOne(newBook)
    
 
     bookID= result.insertedId
   
    res.status(201).json(bookID)
   
})
const port = 3000
app.listen(port, () => console.log(`Server app listening at http://localhost:${port}`))