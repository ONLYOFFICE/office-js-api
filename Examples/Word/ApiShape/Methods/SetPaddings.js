// This example sets the text paddings to the current shape.

// How to update paddings of the drawing.

// Create a shape and set its paddings.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetDocContent();
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text with paddings set to it.");
docContent.Push(paragraph);
drawing.SetPaddings(20 * 36000, 5 * 36000, 5 * 36000, 3 * 36000);