// This example selects the content control.
let document = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("The block text content control is selected.");
document.AddElement(0, blockLvlSdt);
blockLvlSdt.Select();