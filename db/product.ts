import mongoose, { Schema, Document, Model } from "mongoose";

interface IUser extends Document {
  productName: {
    type: StringConstructor;
    required: [true, string];
    trim: true;
    minlength: [number, string];
  };
  price: {
    type: NumberConstructor;
    required: true;
  };
  quantity: {
    type: NumberConstructor;
    required: true;
  };
  flavor: {
    type: StringConstructor;
    required: true;
  };
  description?: {
    type: StringConstructor;
    required: true;
  };
  product_info: {
    type: StringConstructor;
    required: true;
  };
  name_on_cake: string;
  message_on: string;
  addOns?: {
    type: StringConstructor;
    required: false;
  };
  createdAt?: Date;
  updatedAt?: Date;
  bokeys?: {
    type: StringConstructor;
    required: false;
  };
  reviews?: {
    type: StringConstructor;
    required: false;
  };
  ratings?: {
    type: StringConstructor;
    required: false;
  };
}

const productSchema: Schema<IUser> = new Schema(
  {
    productName: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [3, "Product name must be at least 3 characters long"],
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    flavor: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    product_info: {
      type: String,
      required: true,
    },
    addOns: {
      type: String,
      required: false,
    },
    bokeys: {
      type: String,
      required: false,
    },
    reviews: {
      type: String,
      required: false,
    },
    ratings: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product: Model<IUser> =
  mongoose.models.Product || mongoose.model<IUser>("Product", productSchema);

export default Product;
