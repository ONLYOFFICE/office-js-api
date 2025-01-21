// This example shows how to get the placeholder text from the content control.
let document = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
document.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Name");
let text = blockLvlSdt.GetPlaceholderText();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + text);
document.Push(paragraph);