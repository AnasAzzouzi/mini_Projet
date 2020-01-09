const mongoose=require('mongoose')
const Schema= mongoose.Schema
let DepartementSchema = new Schema(
    {
        nom:{type:String}
    },
    {
        collection:'Departements'
    }
)
module.exports= mongoose.model('Departement',DepartementSchema)