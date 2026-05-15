// Control the visual appearance of an inline content control in a document.

// How do I hide or show the border of an inline content control in a document?

// Make a content control invisible to the reader by setting its appearance to hidden in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = Api.CreateInlineLvlSdt();
contentControl.SetAppearance("hidden");
contentControl.AddText("This is a content control with a hidden appearance");
paragraph.Push(contentControl);