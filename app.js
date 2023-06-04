import express from 'express'; //สร้างตัวแปรเพื่อเรียกใช้งาน express
const app = express();

import chalk from 'chalk'; //ประกาศตัวช็อกที่ลงเพิ่ม

import Debug from 'debug'; //เอาไว้ดูการทำงานว่าเกิดอะไรขึ้นบ้าง
const debug = Debug('app');

import morgan from 'morgan'; // เป็น middleware?ของเว็บแอป บอกรายละเอียดรีเควส

const PORT = process.env.PORT || 3000; //กำหนด port ที่จะใช้รันแอป 

import productsRouter from "./src/router/productsRouter.js";

import path from 'path'; //สร้าง path
const __dirname = path.resolve();


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public"))); //public เก็บพวก static file เช่น รูป, html, css

app.set("views","./src/views"); //เพิ่ม views ลงใน path ที่ใส่ ต้องมี . ด้วย path จาก root dir
app.set("view engine","ejs");

app.use("/products",productsRouter)

//กำหนดpathแล้วทำให้ไปที่pathก่อนเลย(ไม่มาเข้าapp.getแล้ว)
app.get("/",(req,res)=>{
    res.render('index',{username:'MNMNMN', customers:['mynnii','myuneng','myn']}); //คำสั่งที่จะตอบกลับ index = ชื่อไฟลฺ ejs
}) //ใช้จัดการรีเควสที่เข้ามาหน้า / จะส่งข้อมูลอะไรกลับไป

app.listen(PORT,()=>{
    debug("Listening on port " + chalk.green(" : "+PORT)); //มักจะใช้โชว์ว่ามีเออเร่อมั้ย
    //console.log("Listening on port " + port);
})