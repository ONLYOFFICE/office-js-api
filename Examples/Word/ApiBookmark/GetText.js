// This example shows how to get bookmark text.
let doc = Api.GetDocument()
let paragraph = doc.GetElement(0)
paragraph.AddText("ONLYOFFICE Document Builder")
let range1 = doc.GetRange(0, 11)
range1.AddBookmark("BookmarkName")
let bookmark = doc.GetBookmark("BookmarkName")
paragraph.AddLineBreak()
paragraph.AddText("Bookmark text is: " + bookmark.GetText())
