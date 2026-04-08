// This example shows how to get the bottom border properties of the current paragraph.

// Get the bottom border of the paragraph and display its type in the document.

// How to get the bottom border of the ApiParaPr object.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetBottomBorder("single", 24, 0, 255, 111, 61);
paragraph.AddText("This is a paragraph with a bottom border.");
let border = paraPr.GetBottomBorder();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Bottom border type: " + border.Type + ", size: " + border.Size);
doc.Push(paragraph2);
