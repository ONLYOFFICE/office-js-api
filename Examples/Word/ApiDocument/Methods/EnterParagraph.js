// This example shows how to enter a paragraph at the current cursor position.

// How to add a paragraph at the cursor position.

// Add text and create a new paragraph.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph.");
doc.MoveCursorRight(6, false, true);
doc.EnterParagraph();
doc.EnterText("This is the second paragraph.");