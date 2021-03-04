const express = require('express') //เรียกใช้ express
const app = express()
app.use(express.json()) 

let books = []

app.get('/books',(req,res) => {
  

    res.status(200).json(books)

})



app.post('/books',(req,res) => {
    
    let title = req.body.titlebk
    let price  = req.body.pricebk
    let unit =req.body.unitbk
    let isbn = req.body.isbnbk
    let imageurl = req.body.imageurlbk


    
   
    
     let newBook = {
        titlebk: title,
        pricebk: price,
        unitbk:unit,
        isbnbk:isbn,
        imageurlbk:imageurl
     }


     
    
    books.push(newBook) 
    
   
  
   
})
const port = 3000
app.listen(port, () => console.log(`Server app listening at http://localhost:${port}`))