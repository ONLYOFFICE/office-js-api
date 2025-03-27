// This example specifies the shading applied to the contents of the current text run.
let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetShd("clear", 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the shading set to orange.");