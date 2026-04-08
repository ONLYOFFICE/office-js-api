// This example shows how to get the top border properties of the current paragraph.

// Get the top border of the paragraph and display its type in the document.

// How to get the top border of the ApiParaPr object.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetTopBorder("single", 24, 0, 255, 111, 61);
paragraph.AddText("This is a paragraph with a top border.");
let border = paraPr.GetTopBorder();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Top border type: " + border.Type + ", size: " + border.Size);
doc.Push(paragraph2);
