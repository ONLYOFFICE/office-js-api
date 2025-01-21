// This example shows how to set the placeholder text for the content control.
let document = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
document.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Enter your name here");