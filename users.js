const mysql = require("mysql");
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "Indhu@2002",
    database: "indhu"
}
);
// exports.signup = (req,res)=>{
//     console.log(req.body);
//     const{username,email,password,mobilenumber}= req.body;
//     db.query("insert into login set ?",{username:username,email:email,pasword:password,mobile:mobilenumber},(error,result)=>{
//         if(error){
//             console.log(error);
//         }
//         else{
//             res.status(200).redirect("/login");
//         }
//     })
exports.signup=(req,res)=>{
    console.log(req.body);
    const{username,email,password,mobilenumber}= req.body;
    db.query(
        "select email from login where email=?",
        [email],
        (error,result)=>{
            if(result.length>0){
                return res.render("signup",{msg:"Email id already taken"});
            }
        }
    )

}
exports.login=(req,res)=>{
    console.log(req.body);
    const{username,password}=req.body;
}