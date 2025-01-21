// This example sets the highlight to the content controls from the document.
let document = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
document.AddElement(0, blockLvlSdt);
document.SetControlsHighlight(255, 111, 61);