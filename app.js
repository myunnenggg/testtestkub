import express from 'express'; //สร้างตัวแปรเพื่อเรียกใช้งาน express
import chalk from 'chalk'; //ประกาศตัวช็อกที่ลงเพิ่ม
import Debug from 'debug'; //เอาไว้ดูการทำงานว่าเกิดอะไรขึ้นบ้าง
const debug = Debug('app');
//const debug = require('debug')('app')
import morgan from 'morgan'; // เป็น middleware?ของเว็บแอป บอกรายละเอียดรีเควส
const app = express();
const port = 3000; //กำหนด port ที่จะใช้รันแอป

app.use(morgan('combined'));

app.get("/",(req,res)=>{
    res.send("Hello MYN"); //คำสั่งที่จะตอบกลับ
}) //ใช้จัดการรีเควสที่เข้ามาหน้า / จะส่งข้อมูลอะไรกลับไป

app.listen(port,()=>{
    debug("Listening on port " + chalk.green(" : "+port)); //มักจะใช้โชว์ว่ามีเออเร่อมั้ย
    //console.log("Listening on port " + port);
})