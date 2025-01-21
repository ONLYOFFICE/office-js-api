// This example shows how to delete bookmark from document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = document.GetRange(0, 11);
range1.AddBookmark("Bookmark 1");
let range2 = document.GetRange(14, 22);
range2.AddBookmark("Bookmark 2");
let bookmark1 = document.GetBookmark("Bookmark 1");
bookmark1.Delete();
