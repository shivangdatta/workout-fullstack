const Workout = require('../models/workoutModel')

const getallworkouts = async (req , res) => {
    try{
        const allworkouts = await Workout.find({}).sort({createdAt : -1})    
        res.status(200).json({mssg : 'successful retrieval' , allworkouts})
    }
    catch(err){
        res.status(400).json({mssg : `unable to retrieve data due to ${err}`})
    }

}

const getsingleworkout = async (req, res) => {
    const { id } = req.params;
    try {
        const singleworkout = await Workout.findById(id);
        if (!singleworkout) {
            return res.status(404).json({ msg: 'Workout not found' });
        }
        res.status(200).json({ mssg: 'Successful retrieval', singleworkout });
    } catch (err) {
        res.status(400).json({ mssg: `Unable to retrieve data due to ${err.message}` });
    }
}


const postworkout = async (req , res) => {
    const {title , load , reps} = req.body
    try{
        const workout = await Workout.create({title , load , reps})
        res.status(200).json({mssg : 'data posted successfully' , workout})
    }
    catch(err){
        res.status(400).json({ mssg : `unable to post data due to ${err}`})
    }
}

const deleteworkout = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedworkout = await Workout.findByIdAndDelete(id);
        if (!deletedworkout) {
            return res.status(404).json({ mssg: 'Workout not found' });
        }
        res.status(200).json({ mssg: 'Successful deletion', deletedworkout });
    } catch (err) {
        res.status(400).json({ mssg: `Deletion failed due to ${err.message}` });
    }
};


const updateworkout = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({ mssg: 'No data provided for update' });
    }
    
    const { id } = req.params;

    try {
        const updatedworkout = await Workout.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true, runValidators: true } // Ensure updated document is returned and validators are run
        );
        if (!updatedworkout) {
            return res.status(404).json({ mssg: 'Workout not found' });
        }
        res.status(200).json({ mssg: 'Successful update', updatedworkout });
    } catch (err) {
        res.status(400).json({ mssg: `Update failed due to ${err.message}` });
    }
};

module.exports = {postworkout , getallworkouts , getsingleworkout , deleteworkout , updateworkout}