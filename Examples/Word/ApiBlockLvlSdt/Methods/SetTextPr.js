// Apply font size and bold formatting to the text inside a content control in a document.

// How do I change the font style of text inside a content control in a document?

// Style the text of a content control with a larger font and bold weight in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with the font size set to 30 and the font weight set to bold.");
doc.AddElement(0, blockLvlSdt);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
blockLvlSdt.SetTextPr(textPr);