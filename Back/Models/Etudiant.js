const mongoose=require('mongoose');
const Schema = mongoose.Schema;
let EtudiantSchema= new Schema(
    {   
        nom:{type:String},
        prenom:{type:String},
        dNaiss:{type:Date},
        CIN:{type:String},
        CNE:{type:String},
        filiere:{type:String}
    },
    {
        collection:'Students'
    }    
)
module.exports=mongoose.model('Etudiant',EtudiantSchema);

