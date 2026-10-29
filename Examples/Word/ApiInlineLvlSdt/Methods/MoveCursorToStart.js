// Move the cursor to the start of an inline content control in a document.

// The cursor is placed inside the content control. Use the MoveCursorOutside method to place it before or after the control.

// Insert text at the beginning of the content control.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Text before the content control. ");
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("content control text");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.MoveCursorToStart();
doc.EnterText("Start of the ");
