// This example adds a content control and changes its appearance.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = Api.CreateInlineLvlSdt();
contentControl.SetAppearance("hidden");
contentControl.AddText("This is a content control with a hidden appearance");
paragraph.Push(contentControl);