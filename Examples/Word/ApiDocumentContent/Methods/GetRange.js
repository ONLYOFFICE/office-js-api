// Get a Range object that represents the part of the document contained in the specified document content in a document.

// How to get the range using row and column indexes in a document.

// Make a range text bold using the document content API in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample paragraph.");
docContent.AddElement(0, paragraph);
let range = docContent.GetRange(8, 11);
range.SetBold(true);