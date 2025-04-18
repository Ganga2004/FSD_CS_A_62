const mongoose=require ("mongoose");
const mongo_url ="mongodb+srv://gangashankershukla02072004:1234@cluster0.chadn.mongodb.net/FSD_CS_A?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongo_url)
.then(()=>{
    console.log("MongoDB Connected Successfully")
})
.catch(err=>{
    console.log("MongoDB Error",err.message)
})
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    } ,
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    }
});
const Student=mongoose.model("studentdata",studentSchema);
const createStudent=async()=>{
    try{
        const newStudent=new Student({name:"ABES",email:"abes@gmail,com",age:22});
        const user=await newStudent.save();
        console.log("User created successfully",user);
    }
    catch(err){
        console.log("creation Error",err.message);
    }
}
// createStudent();
const getStudent=async()=>{
    try{
        const students=await Student.find({});
        console.log("All Students",students);
    }
    catch(err){
        console.log("Get Error",err.message)
    }
}
// getStudent();
const updateStudent=async()=>{
    try{
        const updatedStudent=await Student.updateOne({name:"ABES"},{$set:{age:25}});
        console.log("Updated Student",updatedStudent);
    }
    catch(err){
        console.log("Update Error",err.message)
    }
}
// updateStudent();        
const deleteStudent=async()=>{
    try{
        const deletedStudent=await Student.deleteOne({name:"ABES"});
        console.log("Deleted Student",deletedStudent);
    }
    catch(err){
        console.log("Delete Error",err.message)
    }
}   
// deleteStudent();
const app=async()=>{
   await createStudent();
    await updateStudent();
    await getStudent();
    await deleteStudent();
    await getStudent();
}
app();
