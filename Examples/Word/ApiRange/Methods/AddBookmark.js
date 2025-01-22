// This example adds a bookmark to the specified range.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 9);
range.AddBookmark("Bookmark");
paragraph.AddLineBreak();
paragraph.AddText("A bookmark was added to the 'ONLYOFFICE' range.");