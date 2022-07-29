const {Router} = require("express");
const router = Router();
const _ = require("underscore");

const fetch = require("node-fetch");

//routes
 router.get('/', async (req, res) =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    res.json(users);
})

router.post('/', (req, res) =>{
    const {titulo} = req.body.titulo;
    console.log(req.body);
    res.send(`recieve ${titulo}`);
    //res.json({"title":"Hello Word"});
})

router.delete('/:id', (req, res) =>{
    const {id} = req.params;    
    res.send(`Se elimino registro ${id}`)
    //res.json({"title":"Hello Word"});
})


module.exports = router;