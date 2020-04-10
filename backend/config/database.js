import Mongoose from "mongoose"

const dbURI = "mongodb+srv://horus:horus@cluster0-zrkel.mongodb.net/test?retryWrites=true&w=majority"

/**
 ** Configuration of the DB Object
 */
Mongoose.connect(
    dbURI,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
)
Mongoose.Promise = global.Promise
//* We are not using this method, she is deprecated.
Mongoose.set("useFindAndModify", false)

export default Mongoose
