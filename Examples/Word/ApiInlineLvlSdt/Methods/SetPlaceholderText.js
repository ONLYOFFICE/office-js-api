// Define the placeholder text of an inline content control in a document.

// How do I set a custom placeholder message for an inline content control in a document?

// Guide users with descriptive hint text shown inside an empty content control in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.SetPlaceholderText("Custom placeholder");