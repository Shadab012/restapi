const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/students-api",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useFindAndModify:false
}).then(()=>{
    console.log("connection succeed")
}).catch((e)=>{
    console.log(e)
})
