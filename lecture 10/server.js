const express= require("express")   

const app=express();
const PORT=3000

const students=[
    {rollNo:1, name:"Abhijeet", section:"BCA-D"},
    {rollNo:2, name:"Upen", section:"BCA-D"},
    {rollNo:3, name:"Rahul", section:"BCA-D"},
    {rollNo:4, name:"Gurpreet", section:"BCA-D"},
    {rollNo:5, name:"Daulat", section:"BCA-D"}
]
////////Read Operation
app.get("/students",(req,res)=>{
    res.json(students)
})
//REad operation with id
app.get("/students/:rollNo",(req,res)=>{
    const id=req.params.rollNo;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(!student){
        res.status(404).json({success:false, message:"student not found"});
    }
    res.json(student);
})

///Create


app.listen(PORT,()=>console.log("server is running"));