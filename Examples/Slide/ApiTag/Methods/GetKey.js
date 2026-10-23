// Get the key of a tag added in lowercase.

// Keys of new tags are stored in uppercase letters.

// Show the stored key in a shape.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let tag = slide.GetTags().Add("department", "Sales");
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Stored key: " + tag.GetKey());
slide.AddObject(shape);