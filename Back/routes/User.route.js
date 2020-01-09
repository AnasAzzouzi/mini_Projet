const express=require('express')
const router=express.Router()
const UserSchema=require('../Models/User')
//Add User
router.route('/addUser').post((req,res,next)=>{
    UserSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
});
// Get user
router.route('/ListUser').get((req,res)=>{
    UserSchema.find((error,data)=>{
        if(error){
            return next(error)
        }
        else {
            res.json(data)
        }
    })
});
// Update User
router.route('/UpdateUser').put((req,res,next)=>{
    UserSchema.findByIdAndUpdate(req.body._id,
        {$set:req.body},(error,data)=>{
            if (error) {
                return next(error);
                console.log(error)
              } else {
                res.json(data)
                console.log('User updated successfully !')
              }
        })
})

//Delete User

router.route('/DeleteUser').delete((req,res,next)=>{
    
    UserSchema.findByIdAndDelete(req.body._id,(error, data) => {
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