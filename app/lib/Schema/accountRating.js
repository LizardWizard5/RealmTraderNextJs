let mongoose = require('mongoose')

const AccountRatingSchema = new mongoose.Schema({
    accountId:{//The account id of the account being rated
        type: String,
        required: true
    },
    upvotes:{//The number of upvotes the account has
        type: Number,
        default: 0,
        required: true
    },
    downvotes:{//The number of downvotes the account has
        type: Number,
        default: 0,
        required: true
    }
})

export default mongoose.models.accountRatings || mongoose.model('accountRatings', AccountRatingSchema);