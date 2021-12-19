const {Router} = require('express');
const router = Router();
 
const salesController = require("../controllers/sales.controller.js");

//routes
router.get('/',(req,res)=>{
    console.log('Hello word1');
    res.json({Message:"Hellos to this endpoind"});
})

router.get("/get_authors_by_birth",salesController.authorsOderByBrith);
router.get("/get_total_sales_by_author",salesController.getTotalSalesByAuthor);
router.get("/get_top_n_performing_authors",salesController.getTopNPerformingAuthors);


module.exports =router;