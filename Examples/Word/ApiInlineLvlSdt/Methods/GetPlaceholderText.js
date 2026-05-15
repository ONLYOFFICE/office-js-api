// Retrieve the placeholder text set on an inline content control in a document.

// How do I read the placeholder text of an inline content control in a document?

// Confirm the placeholder message is stored correctly before displaying it to users in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.SetPlaceholderText("Enter your text here");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let placeholderText = inlineLvlSdt.GetPlaceholderText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + placeholderText);
doc.Push(paragraph);