const { Router } = require("express");
const NotesModel = require("../models/Notes");
const NotesRouter = Router();

NotesRouter.get("/note", async (req, res) => {
  try {
    let new_notes = await NotesModel.find();
    res.status(201).json({ Message: "get all the data", new_notes: new_notes });
  } catch (error) {
    console.log(error);
    res.status(401).json("someThing went wrong");
  }
});

NotesRouter.post("/create", async (req, res) => {
  const { title, note, category, author } = req.body;
  try {
    const new_note = new NotesModel({ title, note, category, author });
    await new_note.save();
    res.status(201).json({ Message: "new Note data Create successfully",new_note:new_note });
  } catch (error) {
    console.log(error);
    res.status(401).json("someThing went wrong");
  }
});

NotesRouter.patch("/update/:notesId", async (req, res) => {
  const notesId = req.params.notesId;
  const payload = req.body;
  try {
    const updatenotes = await NotesModel.findByIdAndUpdate(
      { _id: notesId },
      payload
    );
    updatenotes.save().then(() => {
      res
        .status(201)
        .json({ message: "Update Successfully", updatenotes: updatenotes });
    });
  } catch (error) {
    console.log(error);
    res.status(401).json("someThing went wrong");
  }
});
// {
//   "title":"Backend",
//   "note":"Today it is the fullStack CRUD Operation",
//   "category":"Live Session",
//   "author":"pulkit tiyagi"
// }

NotesRouter.delete("/deletedata/:notesId", async (req, res) => {
  const notesId = req.params.notesId;
  try {
    const deletenotes = await NotesModel.findByIdAndDelete({ _id: notesId });
    res
      .status(201)
      .json({ message: "deletenotes Successfully", deletenotes: deletenotes });
  } catch (error) {
    console.log(error);
    res.status(401).json("someThing went wrong");
  }
});

module.exports = NotesRouter;
