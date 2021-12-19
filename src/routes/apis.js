const {Router} = require('express');
const router = Router();
 
const salesController = require("../controllers/sales.controller.js");

//routes
router.get('/',(req,res)=>{
    console.log('Hello word');
    res.json({Message:"Hello to this Basic API Endpoint"});
})

router.get("/get_authors_by_birth",salesController.OderAuthorsByBrith);
router.get("/get_total_sales_by_author",salesController.getTotalSalesByAuthor);
router.get("/get_top_n_performing_authors",salesController.getTopNPerformingAuthors);


module.exports =router;