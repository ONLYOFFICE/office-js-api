// This example sets the tag color for the container.

// Creates a block content control and sets the color to it.

// How to set the color to the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetColor(Api.RGB(0, 0, 255));
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a blue tag color.");
doc.AddElement(0, blockLvlSdt);
