const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    { 
    user:{type:String},  
    post: {type:String},   
    
    
    },
    );


const InspectionsSchema = new mongoose.Schema(
    { 
    location:{type:String, required:true},  
    plant: {type:String, required:true}, 
    image: {type:String, required:true},
    info: {type:String, required:true},  
    comment: [commentSchema]
    
    },
    
    {timestamps: true}

    
    );

    const Inspections = mongoose.model('Inspections', InspectionsSchema);

    module.exports = Inspections;