// Get the right border properties of the current paragraph in a document.

// Get the right border of the paragraph and display its type in the document.

// How to get the right border of the paragraph properties object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetRightBorder("single", 24, 0, 255, 111, 61);
paragraph.AddText("This is a paragraph with a right border.");
let border = paraPr.GetRightBorder();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Right border type: " + border.Type + ", size: " + border.Size);
doc.Push(paragraph2);