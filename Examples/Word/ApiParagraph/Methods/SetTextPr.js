// Apply shared text formatting to all text within a paragraph in a document.

// How do I set the same font style and size for every character in a paragraph in a document?

// Uniformly style all text in a paragraph by defining its appearance once in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text with the font size set to 30 and the font weight set to bold.");
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
paragraph.SetTextPr(textPr);