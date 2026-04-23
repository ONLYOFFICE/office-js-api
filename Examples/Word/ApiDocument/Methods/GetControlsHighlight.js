// Read the highlight color applied to all content controls in a document.

// How do I get the current highlight color set on content controls in a document?

// Verify that a highlight was applied correctly by reading it back after setting it in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
doc.SetControlsHighlight(255, 239, 191);
let highlight = doc.GetControlsHighlight();
let paragraph = Api.CreateParagraph();
paragraph.AddText("The controls highlight color is: " + highlight.GetHex());
doc.Push(paragraph);