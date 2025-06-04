// This example shows how to set the placeholder text for the content control.

// Creates a block content control and sets the placeholder text to it.

// How to add the placeholder text to the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Enter your name here");