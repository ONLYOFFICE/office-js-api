// Move the cursor to the start of a block content control in a document.

// The cursor is placed inside the content control. Use the MoveCursorOutside method to place it before or after the control.

// Insert text at the beginning of the first paragraph in the content control.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("Existing text in the content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.MoveCursorToStart();
doc.EnterText("New text. ");
