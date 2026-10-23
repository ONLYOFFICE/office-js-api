// Get a slide tag by its position in the collection.

// Positions are zero-based and follow the order in which the tags were added.

// Show the key and value of the second tag.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let tags = slide.GetTags();
tags.Add("STEP_1", "Plan");
tags.Add("STEP_2", "Build");
tags.Add("STEP_3", "Review");
let tag = tags.GetItemAt(1);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText(tag.GetKey() + " = " + tag.GetValue());
slide.AddObject(shape);