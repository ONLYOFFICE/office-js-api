// Move the cursor to the start of a text range in a document.

// The selection is removed and the cursor is placed before the first character of the range.

// Insert a word right before the found range.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Builder");
let range = doc.Search("Builder")[0];
range.MoveCursorToStart();
doc.EnterText("Document ");
