import { FormModel } from "../models/formModel.js";

export const form = async (req, res) => {
    console.log("Received form data:", req.body);
  
    const formData = new FormModel({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });
  
    try {
      await formData.save();
      console.log("✅ Data saved successfully");
      res.json({ success: true, message: "Data Added" });
    } catch (error) {
      console.error("❌ Error saving data:", error);
      res.status(400).json({ success: false, message: error.message });
    }
  };
  