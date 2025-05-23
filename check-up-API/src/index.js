import express from "express"
import cors from "cors"
import router from "./routes.js"

const app = express()

app.use(cors())

/* Consumo da rotas */
app.use(router)


app.listen(5254, () => {
	console.log("Servidor rodando na porta : 5254");
})