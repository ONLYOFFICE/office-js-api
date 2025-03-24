// This example showh how to get a bookmark range.

// Get a range with a bookmark with specific name.

// How to retrieve a range bookmarked and set it bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 9);
range.AddBookmark("Bookmark");
range = doc.GetBookmarkRange("Bookmark");
range.SetBold(true);