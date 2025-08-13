import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = process.env;
    
    if (!MONGO_URI) {
      throw new Error("MONGO_URI no está definida en las variables de entorno");
    }

    await mongoose.connect(MONGO_URI);
    console.log("✅ Conectado a MongoDB");
  } catch (error) {
    console.error("❌ Error MongoDB:", error.message);
    process.exit(1);
  }
};
