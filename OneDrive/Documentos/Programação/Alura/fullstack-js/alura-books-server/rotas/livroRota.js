
const {Router} = require("express");
const { getLivros } = require("../controladores/livroController");

const router = Router();

router.get("/", getLivros)

router.post("/", (req, res) =>{
    res.send("Voce fez uma requisição POST")
})

router.patch("/", (req, res) =>{
    res.send("PATCH")
})

router.delete("/", (req, res) =>{
    res.send("DELETE")
})

module.exports = router
