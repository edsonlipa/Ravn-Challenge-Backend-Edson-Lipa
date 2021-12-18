const {Router} = require('express');
const router = Router();
//routes
router.get('/',(req,res)=>{
    //console.log('Hello word1');
    
    res.json({Title:"mi primer titulo"});
})

router.get('/performing_authors',(req,res)=>{
    //const {count}=req.body();
    //console.log('Hello word1');
    console.log(req.query)
    let count=req.query.count;
    // if(count){
    //     res.json(count);

    // }else{
    //     res.send("Error, Invalid request");
    // }

    const data= {
        Title:"goku",
        Duration:"1:50",
        Starts: 5,
        post: false,
        count : count
    };
    res.json(data);
})

module.exports =router;