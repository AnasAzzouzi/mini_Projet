const express=require('express')
const router=express.Router()
const NoteSchema=require('../Models/Note')
//AddNote
router.route('/addNote').post((req,res,next)=>{
    NoteSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
});
// Get Notes
router.route('/ListNote').get((req,res)=>{
    NoteSchema.find({idEtudiant:req.body.ide},(error,data)=>{
        if(error){
            return next(error)
        }
        else {
            res.json(data)
        }
    })
});
// Update Note
router.route('/UpdateNote').put((req,res,next)=>{
    NoteSchema.findByIdAndUpdate(req.body._id,
        {$set:req.body},(error,data)=>{
            if (error) {
                return next(error);
                console.log(error)
              } else {
                res.json(data)
                console.log('Note updated successfully !')
              }
        })
})

//Delete Note

router.route('/DeleteNote').delete((req,res,next)=>{
    
    NoteSchema.findByIdAndDelete(req.body._id,(error, data) => {
        if (error) {
          return next(error);
        } 
        else {
          res.status(200).json({
            msg: data
          })
        }
    })
})
module.exports = router;