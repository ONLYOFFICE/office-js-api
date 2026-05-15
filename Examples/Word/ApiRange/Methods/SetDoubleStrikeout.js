// Draw two horizontal lines through a range of text to mark it as crossed out in a document.

// How do I put a double strikethrough on a section of text in a document?

// Visually cancel out words by overlaying them with two crossing lines in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Server Builder");
let range = doc.GetRange(18, 23);
range.SetDoubleStrikeout(true);