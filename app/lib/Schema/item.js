let mongoose = require('mongoose')


const ItemSchema = new mongoose.Schema({
    name:{//Name of the item e.g "Greater Potion of Attack", "Potion of Attack"
        type: String,
        required: true
    },
    imageUrl:{//Name of the image file for the item e.g "greater_potion_of_attack.png", "potion_of_attack.png"
        type: String,
        required: true
    },
    description:{//Basic description of the item
        type: String,
        required: true
    },
    tags:[//Tags for the item e.g. "stat potion", "weapon type (spellblade, staff, Wand, morning star, bow, longbow, sword, katana, dagger, flail, tachi)", "armor (heavy armour, light armour, robe)", "pet food", "key", "consumable", "skin"
        {
            type: String,
            required: true
        }
    ],
    count:{// Ignore this field. This is for upon trade creation.
        type: Number,
        //required: true
    }
})

export default mongoose.models.items || mongoose.model('items', ItemSchema);