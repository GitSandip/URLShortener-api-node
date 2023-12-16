import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    long_url: {
        type: String,
        required: true
    },
    back_half: {
        type: String,
        required: true
    },
    short_url: {
        type: String,
        required: true
    }
});

const UrlEntry = mongoose.model('UrlEntry', urlSchema);
export default UrlEntry;

