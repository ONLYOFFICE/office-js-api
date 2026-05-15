// Draw a horizontal line through the middle of selected text in a document.

// How do I mark a portion of text as crossed out with a single line in a document?

// Visually cancel or remove words by placing a strikethrough across them in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Server Builder");
let range = doc.GetRange(18, 23);
range.SetStrikeout(true);