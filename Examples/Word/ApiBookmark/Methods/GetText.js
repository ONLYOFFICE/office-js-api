// Read and display the text content stored inside a bookmark in a document.

// How do I extract the text from a named bookmark in a document?

// Confirm what words are covered by a bookmark by printing its content in a document.

let doc = Api.GetDocument()
let paragraph = doc.GetElement(0)
paragraph.AddText("ONLYOFFICE Document Builder")
let range1 = doc.GetRange(0, 11)
range1.AddBookmark("BookmarkName")
let bookmark = doc.GetBookmark("BookmarkName")
paragraph.AddLineBreak()
paragraph.AddText("Bookmark text is: " + bookmark.GetText())