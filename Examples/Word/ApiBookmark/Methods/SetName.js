// This example shows how to set bookmark name.

// How to rename a bookmark.

// Get a bookmark from the document by its name then set a new name to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 11);
range1.AddBookmark("Bookmark_A");
let bookmark = doc.GetBookmark("Bookmark_A");
let oldName = bookmark.GetName();
bookmark.SetName("Bookmark_B");
paragraph.AddLineBreak();
paragraph.AddText("Bookmark name changed from: '" + oldName + "' to: '" + bookmark.GetName() + "'");
