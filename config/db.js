import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://tarique:Zxcvbnm123@cluster0.dhm7i.mongodb.net/form_data", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // tarique
    // Zxcvbnm123

    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit if DB connection fails
  }
};
