// This example shows how to get the placeholder text from the content control.

// How to display the placeholder text of the inline text control.

// Get the inline content control and show its placeholder text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.SetPlaceholderText("Enter your text here");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let placeholderText = inlineLvlSdt.GetPlaceholderText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + placeholderText);
doc.Push(paragraph);