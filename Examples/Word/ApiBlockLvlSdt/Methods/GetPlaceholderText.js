// This example shows how to get the placeholder text from the content control.

// Creates a block content control, sets the placeholder text to it, and returns this placeholder to insert it into the second paragraph of the document.

// How to get the placeholder text from the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Name");
let text = blockLvlSdt.GetPlaceholderText();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + text);
doc.Push(paragraph);