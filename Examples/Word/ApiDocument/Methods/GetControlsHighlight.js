// This example returns the highlight color of the content controls in the document.

// How to get the current highlight color of content controls.

// Set a highlight color on the content controls and retrieve it.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
doc.SetControlsHighlight(255, 239, 191);
let highlight = doc.GetControlsHighlight();
let paragraph = Api.CreateParagraph();
paragraph.AddText("The controls highlight color is: " + highlight.GetHex());
doc.Push(paragraph);
