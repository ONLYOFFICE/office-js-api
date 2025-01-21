// This example showh how to get a bookmark range.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = document.GetRange(0, 9);
range.AddBookmark("Bookmark");
range = document.GetBookmarkRange("Bookmark");
range.SetBold(true);