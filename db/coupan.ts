import mongoose from 'mongoose';

interface ICoupan extends mongoose.Document {
    code: string;
    discount: number;
    active: boolean;
    expiry: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

const coupanSchema = new mongoose.Schema(
    {
        code : {
            type : String,
            required : [true, "Code is required"],
            unique : true
        },
        discount : {
            type : Number,
            default : 0
        },
       active : {
            type : Boolean,
            default : true
        },
        expiry : {
            type : Date,
            required : [true, "Expiry is required"]
        },
    },
    
    {timestamps : true})

const Coupan = mongoose.model<ICoupan>('Coupan', coupanSchema);

export default Coupan;