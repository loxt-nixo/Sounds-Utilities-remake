const { model, Schema } = require("mongoose");
 
let utilsafk = new Schema({
    Guild: String,
    User: String,
    Reason: String,
});
 
module.exports = model("utilsafk", utilsafk);