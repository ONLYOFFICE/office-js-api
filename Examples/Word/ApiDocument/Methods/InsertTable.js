// Insert a table in the middle of existing paragraph text in a document.

// Split a run of text into two parts and place a new table between them.

// Add a table at the cursor position in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("BeforeAfter");
doc.MoveCursorRight(6, false, false);
let table = doc.InsertTable(2, 2);