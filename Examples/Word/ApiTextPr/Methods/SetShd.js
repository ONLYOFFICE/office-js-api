// Specify the shading applied to the contents of the current text run in a document.

// How to set a shading for a text in a document.

// Create a text run object, specify its shading options in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetShd('clear', Api.HexColor('#ff6f3d'));
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the shading set to orange.");