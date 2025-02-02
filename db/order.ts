import mongoose, { Document } from "mongoose";

interface IOrder extends Document {
  product: {
    products: [
      {
        productId: mongoose.Schema.Types.ObjectId;
        count: number;
        price: number;
      }
    ];
  };
  user: mongoose.Schema.Types.ObjectId;
  address: string;
  phone: number;
  amount: number;
  coupan?: string;
  transactionId?: string;
  status: "ordered" | "shipped" | "completed" | "cancelled";
  createdAt?: Date;
  updatedAt?: Date;
}

const orderSchema = new mongoose.Schema(
  {
    product: {
      products: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
          },
          count: Number,
          price: Number,
        },
      ],
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      maxLength: 10,
    },
    amount: {
      type: Number,
      required: true,
    },
    coupan: {
      type: String,
    },
    transactionId: {
      type: String,
    },
    status: {
      type: String,
      enum: ["ordered", "shipped", "completed", "cancelled"],
      default: "ordered",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model<IOrder>("Order", orderSchema);

export default Order;
