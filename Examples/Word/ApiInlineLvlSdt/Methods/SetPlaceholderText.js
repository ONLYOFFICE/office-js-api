// Set the placeholder text to the inline content control in a document.

// How to set placeholder text for the inline content control in a document.

// Display the placeholder set for inline text element in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.SetPlaceholderText("Custom placeholder");