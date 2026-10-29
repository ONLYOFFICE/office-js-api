// Move the cursor to the end of the footnote content in a document.

// The cursor is placed after the last character of the footnote text.

// Append more text to the footnote at the cursor position.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
paragraph.MoveCursorToEnd();
let footnote = doc.AddFootnote();
footnote.GetElement(0).AddText("Footnote text.");
footnote.MoveCursorToEnd();
doc.EnterText(" More text added at the end of the footnote.");
