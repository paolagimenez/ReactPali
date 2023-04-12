const express= require('express');
const router=express.Router();

const{
    traerPersonas
   
}=require('../controllers/persona-Controllers')


router.get("",traerPersonas);

module.exports=router