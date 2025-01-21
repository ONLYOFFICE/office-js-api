// This example shows how to go to bookmark and select it.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = document.GetRange(21, 28);
range.AddBookmark("BookmarkName");
let bookmark = document.GetBookmark("BookmarkName");
bookmark.Select();
