// This example specifies the shading applied to the contents of the current text run.

// How to set a shading for a text.

// Create a text run object, specify its shading options.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetShd("clear", 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the shading set to orange.");