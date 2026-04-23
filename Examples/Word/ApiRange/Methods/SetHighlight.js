// Add a background highlight color behind a range of text in a document.

// How do I highlight a portion of text with a colored background in a document?

// Draw attention to specific words by painting a color behind them in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 26);
range.SetHighlight("lightGray");