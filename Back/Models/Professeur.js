const mongoose=require('mongoose');
const Schema = mongoose.Schema;
let ProfesseurSchema=new Schema (
{
nom :{type:String},
prenom :{type : String},
CIN:{type:String},
CP:{type:String},
departement:{type:String}
},{
    collection:'Profs'
}
)
module.exports=mongoose.model('Professeur',ProfesseurSchema);