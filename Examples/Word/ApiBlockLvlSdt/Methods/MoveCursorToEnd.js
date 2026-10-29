// Move the cursor to the end of a block content control in a document.

// The cursor is placed inside the content control. Use the MoveCursorOutside method to place it before or after the control.

// Insert text at the end of the last paragraph in the content control.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let content = blockLvlSdt.GetContent();
content.GetElement(0).AddText("First paragraph in the content control.");
let paragraph = Api.CreateParagraph();
paragraph.AddText("Last paragraph in the content control.");
content.Push(paragraph);
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.MoveCursorToEnd();
doc.EnterText(" New text.");
