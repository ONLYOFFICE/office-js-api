// This example shows how to get a Range object that represents the part of the document contained in the specified document content.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
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