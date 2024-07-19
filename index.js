import express from 'express'
import cors from 'cors'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  res.send('Express server working! storage-api')
})

app.get("/about", (req, res) => {
    res.json({"message": "Welcome to the about page storage-api"})
})

app.listen(port, () => {
    console.log("Sergeant we have a server on the loose...someone catch it");
})