const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const saltRounds=10
let UserSchema = new Schema(

    {
        login:{type:String , required: true, unique: true},
        pw:{type:String,require:true}
    },{
        collection:'Users'
    })

    module.exports= mongoose.model('User',UserSchema)