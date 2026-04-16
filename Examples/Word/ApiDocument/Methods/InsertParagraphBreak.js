// Enter a paragraph at the current cursor position in a document.

// How to add a paragraph at the cursor position in a document.

// Add text and create a new paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph.");
doc.MoveCursorRight(6, false, true);
doc.InsertParagraphBreak();
doc.EnterText("This is the second paragraph.");