import express from 'express'; //สร้างตัวแปรเพื่อเรียกใช้งาน express
const app = express();

import chalk from 'chalk'; //ประกาศตัวช็อกที่ลงเพิ่ม

import Debug from 'debug'; //เอาไว้ดูการทำงานว่าเกิดอะไรขึ้นบ้าง
const debug = Debug('app');
//const debug = require('debug')('app')

import morgan from 'morgan'; // เป็น middleware?ของเว็บแอป บอกรายละเอียดรีเควส

const port = 3000; //กำหนด port ที่จะใช้รันแอป 

import path from 'path'; //สร้าง path
const __dirname = path.resolve(); //เพิ่มจากเดิม


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public"))); //public เก็บพวก static file เช่น รูป, html, css

//กำหนดpathแล้วทำให้ไปที่pathก่อนเลย(ไม่มาเข้าapp.getแล้ว)
app.get("/",(req,res)=>{
    res.send("Hello MYN"); //คำสั่งที่จะตอบกลับ
}) //ใช้จัดการรีเควสที่เข้ามาหน้า / จะส่งข้อมูลอะไรกลับไป

app.listen(port,()=>{
    debug("Listening on port " + chalk.green(" : "+port)); //มักจะใช้โชว์ว่ามีเออเร่อมั้ย
    //console.log("Listening on port " + port);
})