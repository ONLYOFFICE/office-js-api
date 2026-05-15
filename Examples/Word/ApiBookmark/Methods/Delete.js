// Remove a bookmark from a text range in a document.

// How do I delete a specific bookmark by name in a document?

// Add two bookmarks to different text ranges and then remove one of them in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 11);
range1.AddBookmark("Bookmark 1");
let range2 = doc.GetRange(14, 22);
range2.AddBookmark("Bookmark 2");
let bookmark1 = doc.GetBookmark("Bookmark 1");
bookmark1.Delete();