// Change the value of an existing slide tag.

// The new value replaces the previous one in the slide tags.

// Show the updated value in a shape.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let tag = slide.GetTags().Add("STATUS", "Draft");
tag.SetValue("Final");
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("STATUS: " + slide.GetTags().GetItem("STATUS").GetValue());
slide.AddObject(shape);