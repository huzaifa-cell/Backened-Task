const express = require('express');
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/backend-task')
.then(()=>{console.log("mongo connected")


})
const books = require('./model/Book')

const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.post('/books',async (req,res)=>{
    await books.create({title: "Book",author:"Huzaifa"});
    res.json({msg:"Succesful adding"});
})

app.get('/books',async(req,res)=>{
    const allBooks = await books.find();
    console.log(allBooks);
    
    res.json(allBooks)
})
app.get('/books/:id',async(req,res)=>{
    const _id = req.params.id
    const allBooks = await books.findOne({_id});
    console.log(allBooks);
    
    res.json(allBooks)
})
app.delete('/books/:id',async (req,res)=>{
     const _id = req.params.id
     await books.findOneAndDelete({_id});
     res.json({msg:"Successfully deleted"})
})
app.listen(7000,()=>{console.log("server started");
})