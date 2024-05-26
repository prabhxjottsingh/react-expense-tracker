import { express } from "express"
const app = express()

app.use(express.json())

app.get("/todos", (req, res) => {})

app.post("/todo", (req, res) => {})

app.put("/complete", (req, res) => {})

app.route("/").get((req, res) => {
    res.send("Hello World")
})
