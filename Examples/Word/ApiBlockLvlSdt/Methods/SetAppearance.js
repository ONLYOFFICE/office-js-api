// Change the visual appearance of a content control in a document.

// How do I hide the border and frame of a content control in a document?

// Make a content control invisible to users while keeping its content visible in a document.

let doc = Api.GetDocument();
let contentControl = Api.CreateBlockLvlSdt();
contentControl.SetAppearance("hidden");
contentControl.GetContent().GetElement(0).AddText("This is a content control with a hidden appearance");
doc.Push(contentControl);