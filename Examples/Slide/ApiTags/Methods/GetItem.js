// Find a slide tag by its key.

// The key is case-insensitive, and null is returned if there is no tag with this key.

// Show the found value and the result for a missing key.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let tags = slide.GetTags();
tags.Add("TOPIC", "Budget");
let topic = tags.GetItem("topic");
let missing = tags.GetItem("AUTHOR");
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("TOPIC: " + topic.GetValue() + ", AUTHOR found: " + (missing !== null));
slide.AddObject(shape);