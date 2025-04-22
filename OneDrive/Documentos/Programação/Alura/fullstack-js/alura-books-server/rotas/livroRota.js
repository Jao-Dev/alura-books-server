
const {Router} = require("express");
const { getLivros, getLivroPorId, postLivro } = require("../controladores/livroController");

const router = Router();

router.get("/", getLivros)
router.get("/:id", getLivroPorId)

router.post("/", postLivro)

router.patch("/", (req, res) =>{
    res.send("PATCH")
})

router.delete("/", (req, res) =>{
    res.send("DELETE")
})

module.exports = router
