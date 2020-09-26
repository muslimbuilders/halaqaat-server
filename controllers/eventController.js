const Event  = require('../models/eventModel')

exports.createEvent = async (req, res) => {
    try{
    const event = await Event.create(req.body)
    res.status(200).json({
        "status": "success",
        data: {
            event
        }
    })

}catch(error){
    console.log(error)
}
}