//we use here a slugify library to to simplify the process of generating clean,
// URL-friendly slugs for your web application's content, which can enhance both SEO and user experience.
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

export default mongoose.model("Category", categorySchema);