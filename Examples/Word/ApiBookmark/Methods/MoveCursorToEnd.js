// Move the cursor to the end of a bookmark in a document.

// The cursor is placed at the end of the bookmarked text without selecting it.

// Insert a word where the bookmarked text ends.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Builder");
let range = doc.Search("ONLYOFFICE")[0];
range.AddBookmark("Company");
let bookmark = doc.GetBookmark("Company");
bookmark.MoveCursorToEnd();
doc.EnterText(" Document");
