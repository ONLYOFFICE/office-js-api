// This example shows how to get bookmark in document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = document.GetRange(0, 11);
range1.AddBookmark("Bookmark_ex");
let bookmark = document.GetBookmark("Bookmark_ex");
paragraph.AddLineBreak();
paragraph.AddText("Bookmark with name: " + bookmark.GetName() + " is " + (bookmark.IsActive() ? "active" : "inactive"));
