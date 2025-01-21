// This example adds some text to the paragraph.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. Nothing special.");