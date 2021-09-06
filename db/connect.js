const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Creatively",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
}).then(()=>{
    console.log("Database connection established");
}).catch((e)=>{ 
    console.log(e);
});

