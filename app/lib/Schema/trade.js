import mongoose from 'mongoose';
import ItemSchema from './item';

const TradeSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
    },
    trader: {
        type: String,
        default: 'Anonymous',
        //required: true
    },
    time: {
        type: String,
        default: "Unknown",
    },
    trading: { // Selling items
        type: [], // Using the schema from ItemSchema
    },
    tradingFor: { // Buying items
        type: [],
    },
    sellingTags: {
        type: [String],
    },
    buyingTags: {
        type: [String],
    },
    traderPfp: {
        type: String,
        required: false,
    },
    isSeasonal: {
        type: Boolean,
        default: false,
    },
    isComplete: {
        type: Boolean,
        default: false,
    },
});

// Prevent OverwriteModelError
export default mongoose.models.trades || mongoose.model('trades', TradeSchema);
