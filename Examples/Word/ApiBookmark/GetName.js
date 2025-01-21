// This example shows how to get bookmark name.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = document.GetRange(0, 11);
range.AddBookmark("BookmarkName");
let bookmark = document.GetBookmark("BookmarkName");
paragraph.AddLineBreak();
paragraph.AddText("Bookmark with name: " + bookmark.GetName());
