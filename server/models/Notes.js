const {Schema,model}=require("mongoose")

const NotesSchema = new Schema({
    title:String,
    note:String,
    category:String,
    author:String,
})

const NotesModel = model("note",NotesSchema)
module.exports = NotesModel