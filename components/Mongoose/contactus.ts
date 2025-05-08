import { sub } from "date-fns";
import mongoose from "mongoose";

const contactUsSchema=new mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        
    },
    message:{
        type:String,
        
    },
    subject:{
        type:String,

    }
})

const ContactUs = mongoose?.models?.contactUs || mongoose.model('contactUs', contactUsSchema);

export default ContactUs;