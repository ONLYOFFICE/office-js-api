// Move the cursor to the end of the commented text in a document.

// The cursor is placed where the text the comment is attached to ends.

// Insert a word where the commented text ends.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Builder");
let range = doc.Search("ONLYOFFICE")[0];
let comment = range.AddComment("Check this word.", "John Smith");
comment.MoveCursorToEnd();
doc.EnterText(" Document");
