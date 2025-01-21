// This example sets the label attribute to the container.
let document = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a label set to it.");
blockLvlSdt.SetLabel("2147483647");
document.AddElement(0, blockLvlSdt);
let label = blockLvlSdt.GetLabel();
let paragraph = document.GetElement(1);
paragraph.AddText("Label: " + label);