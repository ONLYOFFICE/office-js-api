// Apply text settings to the content of the content control in a document.

// Create a block content control, add a text to it, and set the font size and bold property to this text in a document.

// Specify the text properties object and apply its settings to the block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with the font size set to 30 and the font weight set to bold.");
doc.AddElement(0, blockLvlSdt);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
blockLvlSdt.SetTextPr(textPr);