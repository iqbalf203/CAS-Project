import mongoose from "mongoose";

const suggestionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
    },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    creationDate: { type: Date, default: Date.now },
    lastUpdatedDate: { type: Date, default: Date.now },
    votes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Suggestion = mongoose.model("Suggestion", suggestionSchema);

// module.exports = Suggestion;

export default Suggestion;