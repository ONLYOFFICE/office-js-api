// Get the class type of the slide tags collection.

// The class type of a tags collection is "tags".

// Show the class type in a shape.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let tags = slide.GetTags();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Class type: " + tags.GetClassType());
slide.AddObject(shape);