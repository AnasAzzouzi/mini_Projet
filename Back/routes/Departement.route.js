const express=require('express')
const router= express.Router()
let DepartementSchema= require('../Models/Departement')


// Create Departement
router.route('/AddDepartement').post((req,res,next)=>{
    DepartementSchema.create(req.body,(error,data)=>{
            if(error){
                return next(error)
            }
            else{
                console.log(data)
                res.json(data)
            }

    })
})

//get departement

router.route('/ListDepartement').get((req,res,next)=>{
    DepartementSchema.find((error,data)=>{
        if(error){
            return next(error)
        }
        else{
            console.log(data)
            res.json(data)
        }

    })

})

//update departement 

router.route('/UpdateDepartement').put((req,res,next)=>{

    DepartementSchema.findByIdAndUpdate(req.body._id,
        {$set:req.body},(error,data)=>{

            if(error){
                return next(error)
            }
            else{
                console.log(data)
                res.json(data)
            }
        })
})

router.route('/DeleteDepartement').delete((req,res,next)=>{
    DepartementSchema.findByIdAndDelete(req.body._id,(error,data)=>{

        if(error){
            return next(error)
        }
        else{
            res.status(200).json(
                {msg:data}
            )

            
        }
    })
})
module.exports=router