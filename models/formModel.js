import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const FormModel = mongoose.model("Form", formSchema);



// const formModel = mongoose.model.form || mongoose.model("form",formSchema)

// export default formModel;