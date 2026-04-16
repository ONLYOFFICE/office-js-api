// Add a content control and change its appearance in a document.

// How can I set appearance using an inline content control in a document?

// Set appearance for an inline content control in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = Api.CreateInlineLvlSdt();
contentControl.SetAppearance("hidden");
contentControl.AddText("This is a content control with a hidden appearance");
paragraph.Push(contentControl);