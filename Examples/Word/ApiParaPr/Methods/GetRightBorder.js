// Retrieve the right border style and size applied to a paragraph in a document.

// How do I read the right border settings of a paragraph in a document?

// Inspect a paragraph's right border to display its type and size values in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetRightBorder("single", 24, 0, 255, 111, 61);
paragraph.AddText("This is a paragraph with a right border.");
let border = paraPr.GetRightBorder();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Right border type: " + border.Type + ", size: " + border.Size);
doc.Push(paragraph2);