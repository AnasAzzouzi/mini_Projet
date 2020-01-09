const mongoose=require('mongoose');
const Schema = mongoose.Schema;
let MatiereSchema= new Schema(
    {  
        nom:{type:String},
        filiere:{type:String},

    },
    {
        collection:'Matieres'
    }    
)
module.exports=mongoose.model('Matiere',MatiereSchema);

