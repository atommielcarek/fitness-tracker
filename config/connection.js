const mongoose = require ('mongoose');
const db = async () => {
    try {
        mongoose.connect(
            process.env.MONGOURI_DB|| 'mongodb://localhost/fitness-tracker2',
            {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex:true
            }
        );
        console.log ("Mongo db connected!");
    } catch(e) {
        console.log (e);
    }
}

module.exports = db;