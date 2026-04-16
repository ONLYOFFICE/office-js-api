// Add a content control and change its appearance in a document.

// How do I set appearance in a document?

// Set appearance using a block-level content control object in a document.

let doc = Api.GetDocument();
let contentControl = Api.CreateBlockLvlSdt();
contentControl.SetAppearance("hidden");
contentControl.GetContent().GetElement(0).AddText("This is a content control with a hidden appearance");
doc.Push(contentControl);