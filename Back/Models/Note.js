const mongoose=require('mongoose')
const Schema= mongoose.Schema
let NoteSchema = new Schema(
    {
        idEtudiant:{type:String},
        idmatiere:{type:String},
        note:{type:Number}

    },
    {
        collection:'Notes'
    }
)
module.exports= mongoose.model('Note',NoteSchema)