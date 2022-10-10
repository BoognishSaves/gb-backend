const mongoose = require('mongoose');

const InspectionsSchema = new mongoose.Schema(
    { 
    location:{type:String, required:true},  
    plant: {type:String, required:true}, 
    image: {type:String, required:true},  
    
    
    },
    
    {timestamps: true}

    
    );

    const Inspections = mongoose.model('Inspections', InspectionsSchema);

    module.exports = Inspections;