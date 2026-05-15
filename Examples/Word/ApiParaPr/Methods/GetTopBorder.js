// Retrieve the top border settings of a paragraph in a document.

// How do I read the top border type and size from a paragraph in a document?

// Confirm that a border was applied correctly by checking its properties after setting it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetTopBorder("single", 24, 0, 255, 111, 61);
paragraph.AddText("This is a paragraph with a top border.");
let border = paraPr.GetTopBorder();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Top border type: " + border.Type + ", size: " + border.Size);
doc.Push(paragraph2);