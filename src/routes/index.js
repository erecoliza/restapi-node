const {Router} = require("express");
const router = Router();

//routes
router.get('/', (req, res) =>{
    //res.send("Hello word");
    res.json({"title":"Hello Word"});
})

router.get('/test', (req, res) =>{
    //res.send("Hello word");
    const data ={
        "nombre":"Recoliza Eduardo",
        "Web-site": "wwww.erecoliza.com"
        }
    res.json(data);
})


module.exports = router;