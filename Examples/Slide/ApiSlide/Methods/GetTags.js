// Mark a slide with a tag that names its target audience.

// A macro can later find the slides with this tag and hide or delete them for other audiences.

// Show the audience stored in the slide tag.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let tags = slide.GetTags();
tags.Add("CUSTOMER_TYPE", "Premium");
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("This slide is for " + tags.GetItem("CUSTOMER_TYPE").GetValue() + " customers");
slide.AddObject(shape);