const mongoose = require('mongoose')
const app = require('./app')

const PORT = process.env.PORT;


const DB = process.env.DATABASE_URL;
mongoose.connect(DB, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true}).then(()=> {
    console.log('DB Connection successful')
})

app.listen(PORT, () =>{
 console.log(`App running on PORT https://localhost:${PORT}`)
})