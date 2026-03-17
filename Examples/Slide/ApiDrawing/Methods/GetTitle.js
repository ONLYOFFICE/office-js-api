// This example gets the title of a drawing.

// How to get the title (alternative text) of a drawing.

// Create a drawing, set its title, and read it back.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
drawing.SetTitle("My Drawing Title");
let title = drawing.GetTitle();
let docContent = drawing.GetDocContent();
let paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Drawing title: " + title);
