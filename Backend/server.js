import express from 'express'
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import workoutRoutes from "./routes/workoutRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"

import { notFound, errorHandler } from './middleware/errorMiddleware.js'



dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is ONNNNN')
})

app.use('/api/workouts', workoutRoutes)
app.use('/api/admins', adminRoutes)


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000


app.listen(PORT, console.log((`server runnning in ${process.env.NODE_ENV} mode on port ${PORT}`)))
