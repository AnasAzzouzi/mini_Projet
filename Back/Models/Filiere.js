const mongoose=require('mongoose');
const Schema = mongoose.Schema;
let FiliereSchema= new Schema(
    {   
        nom:{type:String},
        departement:{type:String},

    },
    {
        collection:'Filieres'
    }    
)
module.exports=mongoose.model('Filiere',FiliereSchema);

