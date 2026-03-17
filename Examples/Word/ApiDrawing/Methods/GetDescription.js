// This example gets the description of a drawing.

// How to get the description (alternative text) of a drawing.

// Create a drawing, set its description, and read it back.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetDescription("My Drawing Description");
let description = drawing.GetDescription();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing description: " + description);
doc.AddElement(0, paragraph);
