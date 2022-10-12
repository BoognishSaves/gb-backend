const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    { 
    user:{type:String, required:true},  
    post: {type:String, required:true}, 
    timestamp: {type:Date, required:true},  
    
    
    },
    );


const InspectionsSchema = new mongoose.Schema(
    { 
    location:{type:String, required:true},  
    plant: {type:String, required:true}, 
    image: {type:String, required:true},  
    comment: [commentSchema]
    
    },
    
    {timestamps: true}

    
    );

    const Inspections = mongoose.model('Inspections', InspectionsSchema);

    module.exports = Inspections;