import express from 'express'; //สร้างตัวแปรเพื่อเรียกใช้งาน express
const app = express();

const productsRouter = express.Router(); //สร้าง productRouter
import products from '../data/products.json' assert { type: "json" };

//route
productsRouter.route("/").get((req,res)=>{ //ใส่ path ที่จะต่อท้ายคำว่า product
    res.render("products",{ //ชื่อไฟล์ ejs
        products,
    });
})
productsRouter.route("/:ID").get((req,res)=>{ //ใส่ path ที่จะต่อท้ายคำว่า product
    const ID = req.params.ID;
    res.render("product",{ //ชื่อไฟล์ ejs
        product: products[ID], //เอาค่าของสินค้าใน productทั้งหมด มาตามค่า ID ที่/มา
    });
})

export default productsRouter; //โยนให้ตัวอื่นใช้ได้