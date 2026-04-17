import express from "express";
import todo from './routes/auth.routes.js'

const app = express()

app.use(express.json())

app.use('/user',todo)

app.listen(7900,()=>{
    console.log('server is running on port 7900')
})
