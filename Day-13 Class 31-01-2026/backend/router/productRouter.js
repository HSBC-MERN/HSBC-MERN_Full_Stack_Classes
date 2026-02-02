const {addProduct,getProducts, deleteProduct  }= require("../controller/productController");
const express=require("express")
const router=express.Router()


router.post("/add-product",addProduct) ;
router.get("/get-products",getProducts );
router.delete("/delete-product/:id",deleteProduct)

module.exports=router;