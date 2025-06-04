// This example shows how to go to bookmark and select it.

// Get a bookmark by its name and then jump to it.

// Select a bookmark from the documnet by going to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(21, 28);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
bookmark.GoTo();
