// Move the cursor to the end of a text range in a document.

// The selection is removed and the cursor is placed after the last character of the range.

// Insert a word right after the found range.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Builder");
let range = doc.Search("ONLYOFFICE")[0];
range.MoveCursorToEnd();
doc.EnterText(" Document");
