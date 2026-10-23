// Get the value of a shape tag.

// The value is read from the shape when the method is called.

// Show the tag value in the shape text.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let tag = shape.GetTags().Add("VERSION", "1");
shape.GetTags().Add("VERSION", "2");
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Version: " + tag.GetValue());
slide.AddObject(shape);