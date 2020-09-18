const Halqah  = require('../models/halqahModel')

exports.createHalqah = async (req, res) => {
  
const newHalqah = await Halqah.create(req.body)
console.log(newHalqah)
    res.status(201).json({
        "status": "success",
        data: {
        "message": newHalqah
        }
    })
}

exports.getAllHalaqaat = async (req, res) => {
  try{
    const Halaqaat = await Halqah.find();
    res.status(200).json({
        "status": "success",
        data: {
            Halaqaat
        }
    })
} catch(err){
    res.status(400).json({
        "status": "success",
        err
    })
}
}

exports.getHalqah = async (req, res) =>{
    try{
    const halqah = await Halqah.findById(req.param.id)

    res.status(200).json({
      "status": "success",
      data: {
          halqah
      }  
    })
} catch(err){
    res.status(400).json({
    "status": "failed",
    err
    })
}
}