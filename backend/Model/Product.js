const mongoose = require('mongoose')

const reviewSchema= new mongoose.Schema({
    name:{ type: String, required: true},
    rating:{ type: Number, required: true},
    comment:{ type: String, required: true},

},
{ timestamps: true}
)


const ProductSchema = new mongoose.Schema({
    title:{ type: String, required: true},
    image:{ type: String, required: true},
    description:{ type: String, required: true},
    price:{ type: Number, required: true,default:0},
    reviews:[ reviewSchema],
},
{
    timestamps: true,
})
module.exports = mongoose.model('Product', ProductSchema)