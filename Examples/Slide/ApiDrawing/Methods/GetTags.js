// Tag a shape so that a macro can recognize it later.

// The tag is stored in the file together with the shape.

// Show the shape tag in the shape text.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let tags = shape.GetTags();
tags.Add("SOURCE", "Quarterly report");
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Source: " + tags.GetItem("SOURCE").GetValue());
slide.AddObject(shape);