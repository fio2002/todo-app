import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    text: { 
      type: String, 
      required: true, 
      trim: true,
      minlength: 1,
      maxlength: 500
    },
    completed: { 
      type: Boolean, 
      default: false 
    }
  },
  { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Índices para mejorar el rendimiento
taskSchema.index({ createdAt: -1 });
taskSchema.index({ completed: 1 });

export const Task = mongoose.model("Task", taskSchema);
