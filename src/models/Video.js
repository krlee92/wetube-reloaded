import Mongoose from "mongoose";

const videoSchema = new Mongoose.Schema({
    title: String,
    description: { type: String },
    createdAt: Date,
    hashtags: [{ type: String}],
    meta: {
        views: Number,
        rating: Number,
    },
});

const Video = Mongoose.model("Video", videoSchema);
export default Video;