// Get the title of a drawing in a document.

// Needed when reading the alternative text title of a drawing.

// Create a drawing, set its title, and read it back.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetTitle("My Drawing Title");
let title = drawing.GetTitle();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing title: " + title);
doc.AddElement(0, paragraph);
