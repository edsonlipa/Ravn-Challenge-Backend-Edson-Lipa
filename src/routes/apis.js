const {Router} = require('express');
const router = Router();
 
const salesController = require("../controllers/sales.controller.js");

//routes
router.get('/',(req,res)=>{
    //console.log('Hello word1');
    
    res.json({Title:"mi primer titulo"});
})

router.get("/authors/by/birth",salesController.authorsOderByBrith);

router.get('/performing_authors',(req,res)=>{
    //const {count}=req.body();
    //console.log('Hello word1');
    console.log(req.query)
    let count=req.query.count;
    
    const data= {
        Title:"goku",
        Duration:"1:50",
        Starts: 5,
        post: false,
        count : count
    };
    res.json(data);
})

// router.get()

module.exports =router;